import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'at-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss']
})
export class FormDateComponent implements OnInit {
  @Input() creationDate: Date;

  ngOnInit() {
  }

}
