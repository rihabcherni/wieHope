import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:5000/contact';

  constructor(private http: HttpClient) { }
  getContact(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getContact`);
  }
  addContact(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addContact`, data);
  }
  deleteContact(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteContact/${id}`);
  }
  getContactById(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/getContactById/${id}`, data);
  }
}

