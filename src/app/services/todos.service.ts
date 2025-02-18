import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  baseUrl= environment.url;
  constructor(private _http: HttpClient) { }

  public getAllTodos(): Observable<any>{
    return this._http.get(`${this.baseUrl}/todos`)
  }
}
