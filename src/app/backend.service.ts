import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private https: HttpClient) { }

  getData(): Observable<Data[]>{
    return this.https.get<Data[]>("https://fatemastersdb.herokuapp.com/accountusers");
  }
}
