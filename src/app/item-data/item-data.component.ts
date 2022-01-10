import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ItemData } from '../models/item-data';
import { MyFormGroup } from '../shared/extensions/my-form-group';

@Component({
  selector: 'app-item-data',
  templateUrl: './item-data.component.html',
  styleUrls: ['./item-data.component.scss'],
})
export class ItemDataComponent implements OnInit {
  itemForm!: MyFormGroup;

  @Output() eventemitterItemData = new EventEmitter<ItemData>();

  constructor() {}

  ngOnInit() {
    this.itemForm = new MyFormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        // Validators.pattern('[A-Z]{1,2}[0-9][0-9A-Z]?\\s?[0-9][A-Z]{2}'),
        Validators.pattern('^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$'), //TODO: change for most use cases working
      ]),
      link: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(400),
        // Validators.pattern(
        //   '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        // ),
      ]),

      linkPhoto: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(400),
        // Validators.pattern(
        //   '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        // ),
      ]),
      price: new FormControl(null, [Validators.required, Validators.min(5)]),
    });
  }

  onSubmit() {
    this.eventemitterItemData.emit(this.itemForm.value);
  }
}
