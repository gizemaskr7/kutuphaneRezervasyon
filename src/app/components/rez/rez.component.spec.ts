import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezComponent } from './rez.component';

describe('RezComponent', () => {
  let component: RezComponent;
  let fixture: ComponentFixture<RezComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RezComponent]
    });
    fixture = TestBed.createComponent(RezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
