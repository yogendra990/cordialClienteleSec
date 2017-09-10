import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordialContactComponent } from './cordial-contact.component';

describe('CordialContactComponent', () => {
  let component: CordialContactComponent;
  let fixture: ComponentFixture<CordialContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordialContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordialContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
