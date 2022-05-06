import { Component, OnInit } from '@angular/core';
import {Course} from "../model/course";
import {CoursesService} from "../services/courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  coursesDataSource: Course[] = [];
  displayedColumns = ['_id','name','category'];

  constructor(private coursesService: CoursesService) {
    this.coursesDataSource = this.coursesService.list();
      }

  ngOnInit(): void {
  }

}
