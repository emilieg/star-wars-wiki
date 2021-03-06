import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki-service.service';
import { SharedService } from '../shared-service.service';

@Component({
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private wikiService:WikiService,
    private sharedService: SharedService) { }


  ngOnInit() {}

  public search(person:string){
  
    this.wikiService.searchForPerson(person)
  
      .subscribe((response) => this.receiveSearchResults(response));
  
  }

  private receiveSearchResults(response){
    this.sharedService.sendSearchResults(response)  
  }


}
