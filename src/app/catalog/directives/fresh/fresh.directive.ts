import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[atFresh]'
})
export class FreshDirective implements OnChanges {
  @Input('atFresh') date: number;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  public ngOnChanges(): void {
    const enspirationPeriod = (14 * 24 * 60 * 60 * 1000);
    const creationDate = new Date(this.date);
    const enspirationDate = creationDate.valueOf() + enspirationPeriod;

    if (creationDate.valueOf() < enspirationDate && enspirationDate >= Date.now()) {
      this.setBorderColor('#BADA55');
    } // enspirated
    if (creationDate.valueOf() > Date.now()) {
      this.setBorderColor('#3893E8');
    } // upcoming
  }

  public setBorderColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement.querySelector('.item'), 'border-color', color);
  }

}
