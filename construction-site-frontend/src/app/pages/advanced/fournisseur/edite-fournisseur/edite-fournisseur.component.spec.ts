import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeFournisseurComponent } from './edite-fournisseur.component';

describe('EditeFournisseurComponent', () => {
  let component: EditeFournisseurComponent;
  let fixture: ComponentFixture<EditeFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
