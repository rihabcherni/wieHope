import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DonorDashService {

  private apiUrl = 'http://localhost:5000/dashboard';

  constructor(private http: HttpClient) {}

  getStatistics(DonorId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/StatistiquesDonor/${DonorId}`);
  }

  getDonationStatisticsByYearDonor(DonorId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/DonationStatisticsByYearDonor/${DonorId}`);
  }
  getlastDonationDonor(DonorId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/lastDonationDonor/${DonorId}`);
  }
  getlastSchoolDonor(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/lastSchoolDonor`);
  }}

