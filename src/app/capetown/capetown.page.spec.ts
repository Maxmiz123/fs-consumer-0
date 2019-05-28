import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapetownPage } from './capetown.page';

describe('CapetownPage', () => {
  let component: CapetownPage;
  let fixture: ComponentFixture<CapetownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapetownPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapetownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
