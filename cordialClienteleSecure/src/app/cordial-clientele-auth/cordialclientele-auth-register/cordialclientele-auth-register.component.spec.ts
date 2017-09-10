import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordialclienteleAuthRegisterComponent } from './cordialclientele-auth-register.component';

describe('CordialclienteleAuthRegisterComponent', () => {
  let component: CordialclienteleAuthRegisterComponent;
  let fixture: ComponentFixture<CordialclienteleAuthRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordialclienteleAuthRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordialclienteleAuthRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
