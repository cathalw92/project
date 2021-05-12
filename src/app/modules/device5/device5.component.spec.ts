import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Device5Component } from './device5.component';

describe('Device5Component', () => {
  let component: Device5Component;
  let fixture: ComponentFixture<Device5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Device5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Device5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
