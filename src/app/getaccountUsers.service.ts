import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Data } from "./data";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable()
export class GetAccountUsers {
  apiUrl = "https://fatemastersdb.herokuapp.com/accountusers";

  constructor(private http: HttpClient) {}

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl);
  }
}
