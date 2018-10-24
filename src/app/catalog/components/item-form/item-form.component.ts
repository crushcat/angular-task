import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../interfaces';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'at-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  @Input() course: ICourse;
  @Output() courseEventSave: EventEmitter<ICourse> = new EventEmitter();
  @Output() courseEventCancel: EventEmitter<any> = new EventEmitter();
  public itemForm: FormGroup;
  public titleControl = new FormControl('');
  public descriptionControl = new FormControl('');
  public dateControl = new FormControl('');
  public lengthControl = new FormControl('');
  public authorsControl = new FormControl('');

  save() {
    this.courseEventSave.emit(this.course);
  }

  cancel() {
    this.courseEventCancel.emit();
  }

  ngOnInit() {
    this.itemForm = this.fb.group({
      title: this.titleControl,
      description: this.descriptionControl,
      creationDate: this.dateControl,
      lenght: this.lengthControl,
      authors: this.authorsControl
    });

    this.titleControl.setValue(this.course.name);
    this.descriptionControl.setValue(this.course.description);
    this.dateControl.setValue(this.course.date);
    this.lengthControl.setValue(this.course.length);
    this.authorsControl.setValue(this.course.authors);

    this.itemForm.valueChanges.subscribe(() => {
      this.course.name = this.itemForm.value.title;
      this.course.description = this.itemForm.value.description;
      this.course.date = new Date(this.itemForm.value.date);
      this.course.length = this.itemForm.value.length;
      this.course.authors = this.itemForm.value.authors;
    })
  }

  constructor(private fb: FormBuilder) { }
}
