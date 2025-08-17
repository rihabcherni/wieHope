import { Component } from '@angular/core';

@Component({
  selector: 'app-responsable-ecole',
  templateUrl: './responsable-ecole.component.html',
  styleUrls: ['./responsable-ecole.component.css']
})
export class ResponsableEcoleComponent {
  isSidebarOpen: boolean = true;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  showSpinner: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);
  }
}
