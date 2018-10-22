import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[atFresh]'
})
export class FreshDirective implements OnInit {
  @Input('atFresh') creationDate: number;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const currentDate: number = Date.now();
    const enspirationDate = this.creationDate + (14 * 24 * 60 * 60 * 1000);

    if(this.creationDate < enspirationDate && enspirationDate >= currentDate) {
      this.setBorderColor('#BADA55');
    }
    if(this.creationDate > currentDate) {
      this.setBorderColor('#3893E8');
    }
  }

  setBorderColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.item'), 'border-color', color);
  }

}


//If creationDate < currentDate && creationDate >= currentDate - 14days

