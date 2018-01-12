import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCreationYearComponent } from './filter-creation-year.component';

describe('FilterCreationYearComponent', () => {
  let component: FilterCreationYearComponent;
  let fixture: ComponentFixture<FilterCreationYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCreationYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCreationYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
