import { Component } from '@angular/core';

@Component({
  selector: 'app-our-activite',
  templateUrl: './our-activite.component.html',
  styleUrls: ['./our-activite.component.css']
})
export class OurActiviteComponent {
  acteur = [
    {
      id: "1",
      role:"School director or professor ambassador",
      icon: "fas fa-user-tie  fa-2x ",
      text:"Enrolling in our app as a school director or professor presents a unique opportunity for you to play a pivotal role in bridging the gap between our organization and students in need. Your involvement becomes a crucial link, facilitating the connection between resources and those who can benefit from them the most. Join our collective efforts to create a positive influence in the realm of education and cultivate a supportive community that benefits everyone involved.",
      showMore: false,
    },
    {
      id: "1",
      role:"Donor",
      icon: "fas fa-book fa-2x",
      text:"By registering as a donor on our app, you empower children in need with a greater chance of successfully completing their education and building a brighter future. Your contribution becomes a catalyst for positive change, opening doors of opportunity and fostering a path toward a more promising tomorrow for these children. Join us in making a meaningful impact on their lives through the gift of education.",
      showMore: false,
    }
  ];
}
