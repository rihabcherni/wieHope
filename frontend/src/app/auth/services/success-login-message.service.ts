import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessLoginMessageService {
  private successMessageSource = new Subject<string>();
  successMessage$ = this.successMessageSource.asObservable();

  showSuccessMessage(message: string) {
    this.successMessageSource.next(message);
  }
  constructor() { }
}
