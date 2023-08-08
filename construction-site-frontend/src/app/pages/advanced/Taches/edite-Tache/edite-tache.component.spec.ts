import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeTachesChantiersComponent } from './edite-tache.component';

describe('EditeTacheComponent', () => {
  let component: EditeTachesChantiersComponent;
  let fixture: ComponentFixture<EditeTachesChantiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeTachesChantiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeTachesChantiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
