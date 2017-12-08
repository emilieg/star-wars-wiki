import { Injectable, Output, EventEmitter} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SharedService {

  constructor() { }

  public searchResults:Subject<Array<any>> = new Subject();

  public sendSearchResults(results:Array<any>){
    console.log("sending search results", results);
    this.searchResults.next(results);
  }
}
