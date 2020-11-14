import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietySevaComponent } from './diety-seva.component';

describe('DietySevaComponent', () => {
  let component: DietySevaComponent;
  let fixture: ComponentFixture<DietySevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietySevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietySevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
