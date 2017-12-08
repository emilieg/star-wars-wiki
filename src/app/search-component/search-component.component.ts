import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki-service.service';

@Component({
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor(
    private wikiService:WikiService) { }

  ngOnInit() {
  }


  public search(person:string){
    this.wikiService.searchForPerson(person)
      .subscribe((response) => this.receiveSearchResults());
  }

  private receiveSearchResults(response){
    console.log("response", response);
  }
}
