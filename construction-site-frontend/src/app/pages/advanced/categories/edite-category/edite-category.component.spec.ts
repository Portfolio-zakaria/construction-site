import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeCategoryComponent } from './edite-category.component';

describe('EditeCategoryComponent', () => {
  let component: EditeCategoryComponent;
  let fixture: ComponentFixture<EditeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
