import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbcComponent } from './dbc.component';

describe('DbcComponent', () => {
  let component: DbcComponent;
  let fixture: ComponentFixture<DbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
