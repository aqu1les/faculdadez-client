import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineCardComponent } from './discipline-card.component';

describe('DisciplineCardComponent', () => {
  let component: DisciplineCardComponent;
  let fixture: ComponentFixture<DisciplineCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplineCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
