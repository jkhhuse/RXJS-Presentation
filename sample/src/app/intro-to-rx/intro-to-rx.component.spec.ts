import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToRxComponent } from './intro-to-rx.component';

describe('IntroToRxComponent', () => {
  let component: IntroToRxComponent;
  let fixture: ComponentFixture<IntroToRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroToRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroToRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
