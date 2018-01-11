import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBusinessCategoriesComponent } from './filter-business-categories.component';

describe('FilterBusinessCategoriesComponent', () => {
  let component: FilterBusinessCategoriesComponent;
  let fixture: ComponentFixture<FilterBusinessCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBusinessCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBusinessCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
