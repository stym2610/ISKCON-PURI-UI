import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOverleyComponent } from './form-overley.component';

describe('FormOverleyComponent', () => {
  let component: FormOverleyComponent;
  let fixture: ComponentFixture<FormOverleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOverleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOverleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
