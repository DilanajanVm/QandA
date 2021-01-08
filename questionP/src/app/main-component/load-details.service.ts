import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadDetailsService {

  url = '';
  constructor(public http: HttpClient) {  }

  // tslint:disable-next-line:typedef
  getLoad(){
  return this.http.get(this.url);
  }

}
