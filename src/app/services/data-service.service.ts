import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }

   getalldata() : Observable<any> {
     let url = 'https://api.covid19india.org/data.json'
     return this.http.get(url).
      pipe((response) => response)
   }

   getStateData() : Observable<any> {
     let url = 'https://api.covid19india.org/data.json'
     return this.http.get(url).
       pipe((response) => response
       )
       
   }
}
