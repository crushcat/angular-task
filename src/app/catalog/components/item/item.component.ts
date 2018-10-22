import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourse } from '../../interfaces'

@Component({
  selector: 'at-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() course: ICourse;
  @Output() editCourseEvent: EventEmitter<number> = new EventEmitter();
  @Output() deleteCourseEvent: EventEmitter<number> = new EventEmitter();

  editCourse() {
    this.editCourseEvent.emit(this.course.id);
  }

  deleteCourse() {
    this.deleteCourseEvent.emit(this.course.id);
  }
}
