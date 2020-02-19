import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipient} from '../models/recipient.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {

  // tslint:disable-next-line:max-line-length
  BASEURL = 'https://jsonplaceholder.typicode.com/users';
    // `https://api.yavun.com/api/1/emailRecipientgetByFilter?exclude=false&listId=711&pageno=1&pagesize=3&searchBy=&segmentId=1569`

  constructor( private http: HttpClient) { }

  // getRecipientGrid(): Observable<Recipient[]> {
  //   return this.http.get<Recipient[]>(this.BASEURL);
  // }
}
