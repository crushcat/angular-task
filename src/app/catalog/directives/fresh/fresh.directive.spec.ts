import { FreshDirective } from './fresh.directive';
import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

@Component({
  selector: 'at-test-component',
  template: `
    <div id="1" [atFresh]="date">
      <div class="item">
        Test
      </div>
    </div>
  `,
  styleUrls: [],
})
export class TestHostComponent {
  public date: Date;
}

describe('FreshDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  const today = new Date();
  let div: HTMLElement;
  const enspirationPeriod = (14 * 24 * 60 * 60 * 1000);

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      declarations: [TestHostComponent, FreshDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    div = fixture.nativeElement.querySelector(".item");
    fixture.detectChanges();
  });

  it('Old date', () => {
    component.date = new Date(today.valueOf() - enspirationPeriod/2);
    fixture.detectChanges();
    expect(div.style.borderColor).toBe("rgb(186, 218, 85)");
  });

  it('Current date', () => {
    component.date = new Date(Date.now());
    fixture.detectChanges();
    expect(div.style.borderColor).toBe("rgb(186, 218, 85)");
  });

  it('Upcoming date', () => {
    component.date = new Date(Date.now() + (1 * 24 * 60 * 60 * 1000));
    fixture.detectChanges();
    expect(div.style.borderColor).toBe("rgb(56, 147, 232)");
  });
  
});
