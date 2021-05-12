import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Device2Component } from './device2.component';

describe('Device2Component', () => {
  let component: Device2Component;
  let fixture: ComponentFixture<Device2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Device2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Device2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
