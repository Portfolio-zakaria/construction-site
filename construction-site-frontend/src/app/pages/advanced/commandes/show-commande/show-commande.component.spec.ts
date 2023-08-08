import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCommandeComponent } from './show-commande.component';

describe('ShowCommandeComponent', () => {
  let component: ShowCommandeComponent;
  let fixture: ComponentFixture<ShowCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
