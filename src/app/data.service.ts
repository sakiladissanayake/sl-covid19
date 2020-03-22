import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_ENDPOINT = 'https://www.hpb.health.gov.lk/api/get-current-statistical';

  constructor(private httpClient: HttpClient) { }

  public getData(){
    return this.httpClient.get(this.REST_API_ENDPOINT);
  }
}
