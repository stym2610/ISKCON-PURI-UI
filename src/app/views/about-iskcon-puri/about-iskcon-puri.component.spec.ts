import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIskconPuriComponent } from './about-iskcon-puri.component';

describe('AboutIskconPuriComponent', () => {
  let component: AboutIskconPuriComponent;
  let fixture: ComponentFixture<AboutIskconPuriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIskconPuriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIskconPuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
