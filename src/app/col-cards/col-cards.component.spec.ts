import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColCardsComponent } from './col-cards.component';

describe('ColCardsComponent', () => {
  let component: ColCardsComponent;
  let fixture: ComponentFixture<ColCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
