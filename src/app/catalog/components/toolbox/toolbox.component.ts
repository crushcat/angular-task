import { Component } from '@angular/core';

@Component({
  selector: 'at-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {
  searchField: string;
  
  onClick() {
    console.log(this.searchField);
  }
}
