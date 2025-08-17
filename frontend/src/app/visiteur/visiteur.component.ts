import { Component } from '@angular/core';

@Component({
  selector: 'app-visiteur',
  templateUrl: './visiteur.component.html',
  styleUrls: ['./visiteur.component.css']
})
export class VisiteurComponent {
  showSpinner: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);
  }
}
