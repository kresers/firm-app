import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLegalStatusComponent } from './filter-legal-status.component';

describe('FilterLegalStatusComponent', () => {
  let component: FilterLegalStatusComponent;
  let fixture: ComponentFixture<FilterLegalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterLegalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLegalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
