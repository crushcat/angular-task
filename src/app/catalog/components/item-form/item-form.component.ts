import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../interfaces';
import { FormGroup, FormControl, FormBuilder, ValidationErrors, Validators, AbstractControl} from '@angular/forms';
import { CustomValidators } from '../../utils/validator';

@Component({
  selector: 'at-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  @Input() course: ICourse;
  @Output() courseEventSave: EventEmitter<ICourse> = new EventEmitter();
  @Output() courseEventCancel: EventEmitter<any> = new EventEmitter();
  public descriptionMaxLength = 500;
  public titleMaxLength = 50;
  public titleControl = new FormControl('', [Validators.required, CustomValidators.maxLengthValidation(this.titleMaxLength)]);
  public descriptionControl = new FormControl('', [Validators.required, CustomValidators.maxLengthValidation(this.descriptionMaxLength)]);
  public dateControl = new FormControl('', [Validators.required]);
  public lengthControl = new FormControl('', [Validators.required]);
  public authorsControl = new FormControl('', [Validators.required]);
  public itemForm: FormGroup;

  public get controls(): {[key: string]: AbstractControl} {
    return this.itemForm.controls;
  }

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.buildForm();

    this.itemForm.valueChanges.subscribe(() => {
      this.course.name = this.itemForm.value.title;
      this.course.description = this.itemForm.value.description;
      this.course.date = new Date(Date.parse(this.itemForm.value.date));
      this.course.length = this.itemForm.value.length;
      this.course.authors = this.itemForm.value.authors;
    });
  }

  public buildForm() {
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
  }

  public save(): void {
    this.courseEventSave.emit(this.course);
  }

  public cancel(): void {
    this.courseEventCancel.emit();
  }
}
