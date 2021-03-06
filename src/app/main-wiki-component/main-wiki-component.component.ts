import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki-service.service';
import { SharedService } from '../shared-service.service'; 

@Component({
  selector: 'main-wiki-component',
  templateUrl: './main-wiki-component.component.html',
  styleUrls: ['./main-wiki-component.component.css']
})
export class MainWikiComponentComponent implements OnInit {

  constructor(
    private wikiService:WikiService,
    private sharedService:SharedService
    ) { }

  public people:Array<any>;

  public next:string; 

  public previous:string;

  public noResults:boolean; 

  public wikiLink:string = 'http://starwars.wikia.com/wiki/Special:Search?query=';

  ngOnInit() {
    
    /* on initialization of component get all of the people */
    this.getAll();


    /* subscribe to the search Results from the Search Component and update the view*/
    this.sharedService.searchResults
      .subscribe((results) => this.assignPeople(results));

  }

  public getAll(){
    
    this.wikiService.getAllPeople()
      
      .subscribe((response) => 
      
        this.assignPeople(response)
      
        );
  }

  private assignPeople(response){
    

      if(response.count > 0) {
        
        this.people = response.results;

        this.noResults = false;

        this.createLink(this.people);

        this.checkForNextPage(response);

        this.checkForPreviousPage(response);

      } else {

        this.noResults = true;

        this.people = [];

        this.next = '';

        this.previous = '';

      }

  }

  public getNextPage() {
  
    this.wikiService.getAnotherPage(this.next)
  
      .subscribe((response) => this.assignPeople(response));
  
  }

  public getPreviousPage() {
  
    this.wikiService.getAnotherPage(this.previous)
  
      .subscribe((response) => this.assignPeople(response));
  
  }

  private checkForNextPage(response):void{
  
    if(response.next){
  
      this.next = response.next;
  
    } else {
  
      this.next = '';
  
    }
  
  }

  private checkForPreviousPage(response):void{
  
    if(response.previous){
  
      this.previous = response.previous;
  
    } else {
  
      this.previous = '';
  
    }
  
  }
/*creates an external link to the Star Wars wiki search results for the selected person*/
  private createLink(people){
    
    people.forEach((person) => {
    
      if(person.name.indexOf(' ') > -1) {
    
        let searchTerm = person.name.split(' ');
    
        for(let i = 0; i < searchTerm.length; i++){
    
          if(i === 0){
    
            person.a = this.wikiLink + searchTerm[i]
    
          } else {
    
            person.a += '+' + searchTerm[i];
    
          }
    
        }
    
      } else {
    
        person.a = this.wikiLink + person.name        
    
      }
    
    })
  
  }



}
