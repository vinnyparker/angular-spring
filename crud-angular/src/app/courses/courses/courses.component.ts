import { Component, OnInit } from '@angular/core';
import {Course} from "../model/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  coursesDataSource: Course[] = [
    { _id: 1, name: 'Angular', category:'front-end'},
    { _id: 2, name: 'Spring Boot', category:'back-end'},
    { _id: 3, name: 'Spring Data JPA', category:'back-end'}
  ];
  displayedColumns = ['_id','name','category'];

  constructor() {
      }

  ngOnInit(): void {
  }

}
