import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatApiService {
  baseUrl="https://api.thecatapi.com/v1/breeds";
  constructor(private http: HttpClient) { }

  getSource(){
    return this.http.get(this.baseUrl);
  }
}
