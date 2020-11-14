import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateTemplateComponent } from './donate-template.component';

describe('DonateTemplateComponent', () => {
  let component: DonateTemplateComponent;
  let fixture: ComponentFixture<DonateTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
