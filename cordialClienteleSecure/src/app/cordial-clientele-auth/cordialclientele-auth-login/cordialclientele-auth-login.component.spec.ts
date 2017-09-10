import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordialclienteleAuthLoginComponent } from './cordialclientele-auth-login.component';

describe('CordialclienteleAuthLoginComponent', () => {
  let component: CordialclienteleAuthLoginComponent;
  let fixture: ComponentFixture<CordialclienteleAuthLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordialclienteleAuthLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordialclienteleAuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
