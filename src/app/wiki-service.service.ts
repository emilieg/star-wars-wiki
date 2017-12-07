import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WikiService {

  constructor(
    private http:HttpClient
    ) { }

  private getPeopleUrl:string = 'https://swapi.co/api/people';

  private searchPeopleUrl:string = 'https://swapi.co/api/people/?search=';

  public getAllPeople(): Observable<any> {
    return this.http.get(this.getPeopleUrl);
  }

}
