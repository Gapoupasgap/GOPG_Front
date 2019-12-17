import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml',
    'Access-Control-Allow-Origin' : '*'
  })
};

const HEADERS = new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Origin': 'https://script.google.com',
  'Access-Control-Allow-Methods': 'GET, POST'
});

@Injectable({
  providedIn: 'root'
})
export class GoogleFormsService {

  url:string ='https://docs.google.com/forms/u/0/d/e/';

  url2: string = 'https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbzeQZihscO7C9MUJi5YvzvIIzgWjjGSJOi_Cny2jskszs48_W5k/exec';

  constructor(private http: HttpClient) { }

  sendResponse (form: string, col, value ){

    var formUrl : string = this.url+form+'/formResponse';
    var valueForPost = {};
    Object.keys(col).forEach(key => {
      valueForPost[ col[key]] = value[key];
    });
    console.log(valueForPost);

    this.http.get(this.url2,  {
      headers: HEADERS,
      params : valueForPost}).subscribe((data) =>  {
      console.log(data);;
    });
  }
}
