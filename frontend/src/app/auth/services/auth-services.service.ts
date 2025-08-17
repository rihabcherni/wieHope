import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  private apiUrl = 'http://localhost:5000';
  private tokenKey = 'authToken';
  private roleKey = 'role';
  private userKey = 'user';
  private schoolKey = 'school';

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  setRole(role: string): void {
    localStorage.setItem(this.roleKey, role);
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }
  setUser(user: object): void {
    const userString = JSON.stringify(user);
    localStorage.setItem(this.userKey, userString);
  }

  setSchool(school: object): void {
    const schoolString = JSON.stringify(school);
    localStorage.setItem(this.schoolKey, schoolString);
  }

  getUser(): object | null {
    const userString = localStorage.getItem(this.userKey);
    return userString ? JSON.parse(userString) : null;
  }

  getSchool(): object | null {
    const schoolString = localStorage.getItem(this.schoolKey);
    return schoolString ? JSON.parse(schoolString) : null;
  }

  getSchoolId(): string | null {
    const schoolString = localStorage.getItem(this.schoolKey);
    const schoolObject =  schoolString ? JSON.parse(schoolString) : null;
    return schoolObject ? schoolObject._id : null;
  }

  getUserId(): string | null {
    const userString = localStorage.getItem(this.userKey);
    const userObject = userString ? JSON.parse(userString) : null;
    return userObject ? userObject._id : null;
  }
  getUserName(): string | null {
    const userString = localStorage.getItem(this.userKey);
    const userObject = userString ? JSON.parse(userString) : null;
    return userObject ? userObject.firstName +" " + userObject.lastName : null;
  }
  getUserPhoto(): string | null {
    const userString = localStorage.getItem(this.userKey);
    const userObject = userString ? JSON.parse(userString) : null;
    return userObject ? userObject.photo : null;
  }
  removeUser(): void {
    localStorage.removeItem(this.userKey);
  }
  removeSchool(): void {
    localStorage.removeItem(this.schoolKey);
  }
  removeRole(): void {
    localStorage.removeItem(this.roleKey);
  }
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/auth/login`, loginData);
  }
}
