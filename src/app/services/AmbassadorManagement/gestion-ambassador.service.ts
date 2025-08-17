import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GestionAmbassadorService {
  private baseUrl = 'http://localhost:5000/ambassador';

  constructor(private http: HttpClient) { }
  getAllAmbassador(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAmbassador`);
  }
  getAmbassador(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAmbassador/${id}`);
  }
  addAmbassador(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addAmbassador`, data);
  }
  updateAmbassador(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateAmbassador/${id}`, data);
  }
  deleteAmbassador(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteAmbassador/${id}`);
  }
  updateAmbassadorPassword(ambassadorId: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateAmbassadorPassword/${ambassadorId}`, data);
  }
}

 