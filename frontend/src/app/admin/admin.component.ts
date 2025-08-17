import { Component } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
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


