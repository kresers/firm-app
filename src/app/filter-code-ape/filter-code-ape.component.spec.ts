import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCodeApeComponent } from './filter-code-ape.component';

describe('FilterCodeApeComponent', () => {
  let component: FilterCodeApeComponent;
  let fixture: ComponentFixture<FilterCodeApeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCodeApeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCodeApeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
