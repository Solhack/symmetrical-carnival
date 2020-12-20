/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ip_trackingComponent } from './ip_tracking.component';

describe('Ip_trackingComponent', () => {
  let component: Ip_trackingComponent;
  let fixture: ComponentFixture<Ip_trackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ip_trackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ip_trackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
