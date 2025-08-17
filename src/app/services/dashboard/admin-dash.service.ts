import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashService {

  private apiUrl = 'http://localhost:5000/dashboard';

  constructor(private http: HttpClient) {}

  getStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/StatistiquesAdmin`);
  }

  getSchoolStatisticsByYear(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/SchoolStatisticsByYear`);
  }

  getDonationStatisticsByYear(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/DonationStatisticsByYear`);
  }
  getlastDonationAdmin(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/lastDonationAdmin`);
  }
  getlastDonorAdmin(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/lastDonorAdmin`);
  }
  getlastSchoolDonor(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/lastSchoolDonor`);
  }
}
