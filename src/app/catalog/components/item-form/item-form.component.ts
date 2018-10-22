import { Component, Input } from '@angular/core';
import { ICourse } from '../../interfaces';

@Component({
  selector: 'at-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  @Input() course: ICourse;

  save() {
    console.log(1);
  }

  cancel() {
    console.log(1);
  }

  constructor() { }
}
