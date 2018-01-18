import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterWorkforceComponent } from './filter-workforce.component';

describe('FilterWorkforceComponent', () => {
  let component: FilterWorkforceComponent;
  let fixture: ComponentFixture<FilterWorkforceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterWorkforceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterWorkforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
