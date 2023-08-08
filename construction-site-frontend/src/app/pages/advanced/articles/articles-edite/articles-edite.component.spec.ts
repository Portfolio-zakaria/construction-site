import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesEditeComponent } from './articles-edite.component';

describe('ArticlesEditeComponent', () => {
  let component: ArticlesEditeComponent;
  let fixture: ComponentFixture<ArticlesEditeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesEditeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesEditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
