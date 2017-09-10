import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordialHomeComponent } from './cordial-home.component';

describe('CordialHomeComponent', () => {
  let component: CordialHomeComponent;
  let fixture: ComponentFixture<CordialHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordialHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
