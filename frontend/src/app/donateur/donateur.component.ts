import { Component } from '@angular/core';

@Component({
  selector: 'app-donateur',
  templateUrl: './donateur.component.html',
  styleUrls: ['./donateur.component.css']
})
export class DonateurComponent {
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
