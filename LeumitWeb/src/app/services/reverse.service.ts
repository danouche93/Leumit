import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReverseService {

  apiUrl = environment.apiUrl + 'reverse/';

  constructor(private httpClient: HttpClient) { }

  ReverseString(s: string): Observable<string[]>{
    return Observable.create((observer: any) => {
      this.httpClient.get(this.apiUrl + "getReversedString/" + s).subscribe(Response => {
        observer.next(Response);
        observer.complete();
      }, err =>{
        console.log(err);
        observer.error(err);
      })
    })
  }
}
