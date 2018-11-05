import { Component, Input } from '@angular/core';

@Component({
  selector: 'at-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() title = '';
 }
