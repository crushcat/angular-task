import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../interfaces';
import { FormGroup, FormControl, FormBuilder, ValidationErrors, Validators, AbstractControl} from '@angular/forms';

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

  private titleValidation = (control: AbstractControl): ValidationErrors => {
    if (control.value.length > 50) return { title: 'Max length 50 symbols' };
    return null;
  }

  private descriptionValidation = (control: AbstractControl): ValidationErrors => {
    if (control.value.length > 500) return { description: 'Max length 500 symbols' };
    return null;
  }

  get controls() { return this.itemForm.controls; }

  public titleControl = new FormControl('', [Validators.required, this.titleValidation]);
  public descriptionControl = new FormControl('', [Validators.required, this.descriptionValidation]);
  public dateControl = new FormControl('');
  public lengthControl = new FormControl('');
  public authorsControl = new FormControl('', [Validators.required]);

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
      date: this.dateControl,
      length: this.lengthControl,
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
      this.course.date = new Date(Date.parse(this.itemForm.value.date));
      this.course.length = this.itemForm.value.length;
      this.course.authors = this.itemForm.value.authors;
    })
  }

  constructor(private fb: FormBuilder) { }
}
