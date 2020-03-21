import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCustomerComponent } from './read-Customer.component';

describe('ReadCustomerComponent', () => {
  let component: ReadCustomerComponent;
  let fixture: ComponentFixture<ReadCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
