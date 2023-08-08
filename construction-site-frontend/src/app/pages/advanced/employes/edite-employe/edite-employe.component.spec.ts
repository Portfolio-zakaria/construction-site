import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeEmployeComponent } from './edite-employe.component';

describe('EditeEmployeComponent', () => {
  let component: EditeEmployeComponent;
  let fixture: ComponentFixture<EditeEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
