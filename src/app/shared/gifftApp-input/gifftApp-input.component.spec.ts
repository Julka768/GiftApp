/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GifftAppInputComponent } from './gifftApp-input.component';

describe('GifftAppInputComponent', () => {
  let component: GifftAppInputComponent;
  let fixture: ComponentFixture<GifftAppInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifftAppInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifftAppInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
