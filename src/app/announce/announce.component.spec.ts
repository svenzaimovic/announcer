/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnnounceComponent } from './announce.component';

describe('AnnounceComponent', () => {
  let component: AnnounceComponent;
  let fixture: ComponentFixture<AnnounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});