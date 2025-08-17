

import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 800,
    navText: ['&#8249;', '&#8250;'],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
    },
    nav: true
  };

  slides = [
    {
      id: "1",
      client:"A Huge Thank You for Your Generosity! ",
      img: "assets/img/testimonial-3.jpg",
      profession: "profession",

      text:" We want to express our deep gratitude to all the donors who contributed to our project. Thanks to your generosity, we were able to provide essential educational resources to the children, making a significant impact on their learning. Your donations make a difference, and we are truly grateful for your ongoing support.",
    showMore: false,
    },
    {
      id: "2",
      client:"A Giant Leap Thanks to Your Support!",
      img: "assets/img/testimonial-3.jpg",
      profession: "profession",

      text:"We are thrilled to share the achievements made possible by your donations. Thanks to you, we were able to establish tutoring workshops that significantly improved the academic performance of our students. Your contribution has opened new possibilities and had a direct impact on the educational well-being of our students. Thank you for being part of our success!",
    showMore: false,
    },
    {
      id: "3",
      client:"A Heartfelt Endorsement of Our Services",
      img: "assets/img/testimonial-3.jpg",
      profession: "profession",

      text:"As an ambassador for our school, I am genuinely impressed by the impact our community has made through your generous donations. The seamless process of receiving and allocating funds has greatly enhanced our ability to meet the unique needs of our students. Your support is transforming education, and I am proud to be part of a community that cares so deeply about the future of our children.",
    showMore: false,
    },
    {
      id: "4",
      client:"Strengthening Our Impact",
      img: "assets/img/testimonial-3.jpg",
      profession: "profession",

      text:"While we appreciate the support received, as an ambassador, I believe there's potential for even greater impact. Clearer communication channels and more targeted campaigns could further engage our community. Let's work together to refine our strategies and ensure that every donor sees the direct and positive outcomes of their contributions.",
    showMore: false,
    },
    {
      id: "5",
      client:"Recognizing Our Amazing Donors",
      img: "assets/img/testimonial-3.jpg",
      profession: "profession",
      text:"I want to extend my heartfelt appreciation to each donor who has contributed to our cause. Your commitment to improving educational opportunities for these children is truly commendable. As an ambassador, I am inspired by the positive change we can achieve when individuals come together for a shared purpose. Thank you for being the driving force behind our success.",
      showMore: false,
    },
    {
      id: "6",
      client:"A Robust Support System",
      img: "assets/img/testimonial-3.jpg",
      profession: "profession",

      text:"Your donations have not only provided financial support but have established a robust framework that enables us to efficiently channel resources where they are needed most. As an ambassador, I am thankful for the well-organized structure that ensures the maximum positive impact of every contribution. Your support is building a foundation for educational success",
      showMore: false,
    },
  ];


}
