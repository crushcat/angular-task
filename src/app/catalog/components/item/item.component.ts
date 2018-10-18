import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../interfaces'

@Component({
  selector: 'at-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() course: ICourse;
  @Output() deleteCourseEvent: EventEmitter<number> = new EventEmitter();

  deleteCourse() {
    this.deleteCourseEvent.emit(this.course.id);
  }
}
