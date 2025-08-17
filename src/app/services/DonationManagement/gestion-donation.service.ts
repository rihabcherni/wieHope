import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionDonationService {
  private baseUrl = 'http://localhost:5000/donation';

  constructor(private http: HttpClient) { }

  getAllDonations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllDonations`);
  }

  getAllDonationsByDonor(donorId: string): Observable<any> {
    const url = `${this.baseUrl}/getAllDonationsByDonor/${donorId}`;
    return this.http.get(url);
  }
  getAllDonationsBySchool(school: string): Observable<any> {
    const url = `${this.baseUrl}/getAllDonationsBySchool/${school}`;
    return this.http.get(url);
  }
  getlastDonationsBySchool(school:string): Observable<any>{
    const url= `${this.baseUrl}/getlastDonationsBySchool/${school}`;
    return this.http.get(url);
  }

  getDonationById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getDonationById/${id}`);
  }

  createDonation(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createDonation`, data);
  }

  updateDonationById(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateDonationById/${id}`, data);
  }

  deleteDonationById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteDonationById/${id}`);
  }
}
