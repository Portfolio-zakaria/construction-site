import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeSousTraitantComponent } from './edite-sous-traitant.component';

describe('EditeSousTraitantComponent', () => {
  let component: EditeSousTraitantComponent;
  let fixture: ComponentFixture<EditeSousTraitantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeSousTraitantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeSousTraitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
