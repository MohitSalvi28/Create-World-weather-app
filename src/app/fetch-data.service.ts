import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, wheatherResponse } from './response';

const BASE_URL = 'https://countriesnow.space/api/v0.1/countries';
const api_key = '794ee95e63c5a32aaf88cd813fa2e425'

@Injectable({
  providedIn: 'root'
})


export class FetchDataService {

  constructor(private http: HttpClient) { }


  getData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${BASE_URL}/`);
  }
  getWheather(country : string)  : Observable<wheatherResponse>{
      return this.http.get<wheatherResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=794ee95e63c5a32aaf88cd813fa2e425`)
  }
}
