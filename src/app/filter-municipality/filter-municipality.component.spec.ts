import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMunicipalityComponent } from './filter-municipality.component';

describe('FilterMunicipalityComponent', () => {
  let component: FilterMunicipalityComponent;
  let fixture: ComponentFixture<FilterMunicipalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterMunicipalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMunicipalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
