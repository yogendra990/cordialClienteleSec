import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoridalClienteleRxjsComponent } from './coridal-clientele-rxjs.component';

describe('CoridalClienteleRxjsComponent', () => {
  let component: CoridalClienteleRxjsComponent;
  let fixture: ComponentFixture<CoridalClienteleRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoridalClienteleRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoridalClienteleRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
