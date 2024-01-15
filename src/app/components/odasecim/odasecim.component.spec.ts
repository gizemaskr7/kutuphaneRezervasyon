import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdasecimComponent } from './odasecim.component';

describe('OdasecimComponent', () => {
  let component: OdasecimComponent;
  let fixture: ComponentFixture<OdasecimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdasecimComponent]
    });
    fixture = TestBed.createComponent(OdasecimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
