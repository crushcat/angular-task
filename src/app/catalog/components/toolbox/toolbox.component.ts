import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'at-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {
  @Output() searchEventField: EventEmitter<string> = new EventEmitter();
  searchField: string;
  
  search() {
    this.searchEventField.emit(this.searchField);
  }
}
