import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FateDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("https://fatemastersdb.herokuapp.com/profiles")
  }
}
