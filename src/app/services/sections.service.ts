import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  apiURL: string = 'http://localhost:8000/';
  constructor(private httpClient: HttpClient) { }

  public getSectionsData() {
    return this.httpClient.get<IResponse[]>(`${this.apiURL}students`);
  }

  public updateStudentDetails(student: IResponse,section:string): Observable<IResponse> {
    return this.httpClient.put<IResponse>(`${this.apiURL}students`, {student:student,section:section});
  }

}
