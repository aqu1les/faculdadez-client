import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDisciplineComponent } from './show-discipline.component';

describe('ShowDisciplineComponent', () => {
  let component: ShowDisciplineComponent;
  let fixture: ComponentFixture<ShowDisciplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDisciplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
