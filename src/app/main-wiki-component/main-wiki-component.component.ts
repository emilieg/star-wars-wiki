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

  ngOnInit() {
  }

  public getAll(){
    this.wikiService.getAllPeople()
      .subscribe((response) => console.log("response is what", response));
  }

}
