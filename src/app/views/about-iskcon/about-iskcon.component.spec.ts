import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIskconComponent } from './about-iskcon.component';

describe('AboutIskconComponent', () => {
  let component: AboutIskconComponent;
  let fixture: ComponentFixture<AboutIskconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIskconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIskconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
