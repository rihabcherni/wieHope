import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionSchoolService {
  private baseUrl = 'http://localhost:5000/school';

  constructor(private http: HttpClient) { }

  getAllSchool(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getSchool`);
  }

  getAllSchoolsDemande(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllSchoolsDemande`);
  }

  getSchoolDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getSchool/${id}`);
  }

  addSchool(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addSchool`, data);
  }

  updateSchool(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateSchool/${id}`, data);
  }

  deleteSchool(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteSchool/${id}`);
  }
  acceptSchool(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/acceptSchool/${id}`);
  }
}
