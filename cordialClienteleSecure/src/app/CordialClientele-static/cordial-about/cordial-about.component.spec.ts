import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordialAboutComponent } from './cordial-about.component';

describe('CordialAboutComponent', () => {
  let component: CordialAboutComponent;
  let fixture: ComponentFixture<CordialAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordialAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordialAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
