import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki-service.service';

@Component({
  selector: 'main-wiki-component',
  templateUrl: './main-wiki-component.component.html',
  styleUrls: ['./main-wiki-component.component.css']
})
export class MainWikiComponentComponent implements OnInit {

  constructor(
    private wikiService:WikiService
    ) { }

  public people:Array<any>;

  public next:Boolean; 

  ngOnInit() {
    
    /*on initialization of component get all of the people*/
    this.getAll();

  }

  public getAll(){
    this.wikiService.getAllPeople()
      .subscribe((response) => 
        this.assignPeople(response)
        );
  }

  private assignPeople(response){
    if(response){
      console.log("response", response);
    }
    this.people = response.results;
    console.log("people", this.people);
  }

}
