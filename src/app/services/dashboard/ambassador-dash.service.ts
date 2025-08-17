import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbassadorDashService {

  private apiUrl = 'http://localhost:5000/dashboard';

  constructor(private http: HttpClient) { }

  getStatisticsAmbassador(schoolId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/StatistiquesAmbassador/${schoolId}`);
  }
}
 