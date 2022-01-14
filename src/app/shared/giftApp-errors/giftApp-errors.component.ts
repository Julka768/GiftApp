import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'giftApp-errors',
  templateUrl: './giftApp-errors.component.html',
  styleUrls: ['./giftApp-errors.component.scss'],
})
export class GiftAppErrorsComponent implements OnInit {
  @Input() control!: AbstractControl | null;
  constructor() {}

  ngOnInit() {}
}
