import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) { }

  test() {
    return this.httpClient.get('https://api.publicapis.org/entries')
    // console.log('jsndkfsdf')
  }
}
