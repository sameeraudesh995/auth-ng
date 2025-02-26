import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../dto/Job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  baseUrl=environment.jobUrl;

  constructor(private http: HttpClient) {}

  getJobById(): Observable<Job> {
    return this.http.get<Job>(`${this.baseUrl}/jobs`);
  }
}
