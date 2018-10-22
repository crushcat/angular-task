import { Component, Input } from '@angular/core';

@Component({
  selector: 'at-form-duration',
  templateUrl: './form-duration.component.html',
  styleUrls: ['./form-duration.component.scss']
})
export class FormDurationComponen {
  @Input() duration: number = 0;

  constructor() { }
}
