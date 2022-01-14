// import { Component, OnInit } from '@angular/core';

// export class GifftAppInputComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'gifftApp-input',
  templateUrl: './gifftApp-input.component.html',
  styleUrls: ['./gifftApp-input.component.scss'],
})
export class GifftAppInputComponent implements OnInit {
  constructor(private ref: ChangeDetectorRef) {
    this.onBlur = new EventEmitter();
  }

  @Input() appAutoFocus = false;
  @Input() formGroup!: FormGroup;
  @Input() control!: AbstractControl;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() id = '';
  @Input() name: string = this.id || '';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() errorMessage: string | boolean | null = null;
  @Input() extraClass: string | string[] = '';

  @Input() maxLength = 100;
  @Input() minLength = 0;

  get formControl(): FormControl {
    const cntrl = this.control as FormControl;
    return cntrl;
  }

  @Output() onBlur: EventEmitter<boolean>;

  // HTML helpers
  objectFn = Object;

  ngOnInit() {}

  blur() {
    this.onBlur.emit(true);
  }
}
