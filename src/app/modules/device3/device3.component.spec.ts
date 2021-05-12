import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Device3Component } from './device3.component';

describe('Device3Component', () => {
  let component: Device3Component;
  let fixture: ComponentFixture<Device3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Device3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Device3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
