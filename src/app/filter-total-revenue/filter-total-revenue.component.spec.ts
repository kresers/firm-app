import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTotalRevenueComponent } from './filter-total-revenue.component';

describe('FilterTotalRevenueComponent', () => {
  let component: FilterTotalRevenueComponent;
  let fixture: ComponentFixture<FilterTotalRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTotalRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTotalRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
