import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSousTraitantComponent } from './new-sous-traitant.component';

describe('NewSousTraitantComponent', () => {
  let component: NewSousTraitantComponent;
  let fixture: ComponentFixture<NewSousTraitantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSousTraitantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSousTraitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
