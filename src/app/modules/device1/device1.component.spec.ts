import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Device1Component } from './device1.component';



describe('Device1Component', () => {
  let component: Device1Component;
  let fixture: ComponentFixture<Device1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Device1Component ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Device1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
