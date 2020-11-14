import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderAcharyaComponent } from './founder-acharya.component';

describe('FounderAcharyaComponent', () => {
  let component: FounderAcharyaComponent;
  let fixture: ComponentFixture<FounderAcharyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FounderAcharyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FounderAcharyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
