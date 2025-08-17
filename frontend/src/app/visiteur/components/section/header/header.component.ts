import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'ng-carousel-demo';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 800,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

    slides = [
      {
        id: "1",
        tiltle:"Transform a student's life Donate and make an impact",
        img: "assets/img/visiteur/carousel-1.jpg",
        btn1: "About Us",
        btn2: "Our Causes",
      },
      {
        id: "2",
        tiltle:"Lifting the dreams of poor children is like planting seeds",
        img: "assets/img/visiteur/carousel-3.png",
        btn1: "About Us",
        btn2: "Our Causes",
        text:"they deserve the chance to grow into something beautiful"
      },
    ];
}
