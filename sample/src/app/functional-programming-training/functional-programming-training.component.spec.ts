import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalProgrammingTrainingComponent } from './functional-programming-training.component';

describe('FunctionalProgrammingTrainingComponent', () => {
  let component: FunctionalProgrammingTrainingComponent;
  let fixture: ComponentFixture<FunctionalProgrammingTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalProgrammingTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalProgrammingTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
