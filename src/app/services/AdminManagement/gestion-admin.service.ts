import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionAdminService {
  private baseUrl = 'http://localhost:5000/admin';

  constructor(private http: HttpClient) { }

  getAllAdmin(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllAdmin`);
  }

  getAdminDetails(AdminId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAdminDetails/${AdminId}`);
  }

  addAdmin(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createAdmin`, data);
  }

  updateAdmin(AdminId: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateAdmin/${AdminId}`, data);
  }

  deleteAdmin(AdminId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteAdmin/${AdminId}`);
  }

  updateAdminPassword(adminId: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateAdminPassword/${adminId}`, data);
  }
}
