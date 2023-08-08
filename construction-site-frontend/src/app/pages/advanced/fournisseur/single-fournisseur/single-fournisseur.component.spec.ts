import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFournisseurComponent } from './single-fournisseur.component';

describe('SingleFournisseurComponent', () => {
  let component: SingleFournisseurComponent;
  let fixture: ComponentFixture<SingleFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
