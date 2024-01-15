import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezarvasyonlarimComponent } from './rezarvasyonlarim.component';

describe('RezarvasyonlarimComponent', () => {
  let component: RezarvasyonlarimComponent;
  let fixture: ComponentFixture<RezarvasyonlarimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RezarvasyonlarimComponent]
    });
    fixture = TestBed.createComponent(RezarvasyonlarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
