import { Component, OnInit } from '@angular/core';
import { courses_detail } from "./courses.model";

@Component({
  selector: 'app-courses-detail-page',
  templateUrl: './courses-detail-page.component.html',
  styleUrls: ['./courses-detail-page.component.scss']
})
export class CoursesDetailPageComponent implements OnInit {

  courseDetailArray: courses_detail[] = [];
  constructor() {
    this.courseDetailArray.push(
      new courses_detail("Machine Learning A-Z™: Hands-On Python & R In Data Science","Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included",729,"mozinomer",288,"english",890,"lorem","alisjdliasjd","heres is the description we will need to folow","mozinomeromer",20,"reieew content that the customer has published",true)
    )
   }

  ngOnInit() {
  }

}
