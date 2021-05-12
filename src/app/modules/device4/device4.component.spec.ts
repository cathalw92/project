import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Device4Component } from './device4.component';

describe('Device4Component', () => {
  let component: Device4Component;
  let fixture: ComponentFixture<Device4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Device4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Device4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
