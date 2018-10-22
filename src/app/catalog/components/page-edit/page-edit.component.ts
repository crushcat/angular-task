import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces';
import { CoursesService } from '../../services/cources/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'at-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnInit { 
  id: number;
  course: ICourse;

  ngOnInit() {
    this.router.params.subscribe((data) => {
      this.id = data['id'];
      this.course = this.courseService.getCourseById(this.id);
    });
  }

  constructor(
    private courseService: CoursesService,
    private router: ActivatedRoute
    ) {}
}
