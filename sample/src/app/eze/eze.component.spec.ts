import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EzeComponent } from './eze.component';

describe('EzeComponent', () => {
  let component: EzeComponent;
  let fixture: ComponentFixture<EzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
