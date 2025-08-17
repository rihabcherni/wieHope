import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GestionDonorService {
  private baseUrl = 'http://localhost:5000/donor';

  constructor(private http: HttpClient) { }

  getAllDonor(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllDonor`);
  }
  getDonorDetails(DonorId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getDonorDetails/${DonorId}`);
  }
  addDonor(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addDonor`, data);
  }
  updateDonor(DonorId: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateDonor/${DonorId}`, data);
  }
  deleteDonor(DonorId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteDonor/${DonorId}`);
  }
  updateDonorPassword(donorId: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateDonorPassword/${donorId}`, data);
  }
}
