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
  itemData!: ItemData;
  itemForm!: MyFormGroup;

  @Output() eventemitterItemData = new EventEmitter<ItemData>();

  constructor(private fbBuilder: FormBuilder) {}

  ngOnInit() {
    this.itemData = { name: 'Julia', link: 'Czerwińska', price: 20 };
    this.itemData = new ItemData('Ola', 'Czerwinska', 29);

    this.itemForm = new MyFormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$'), //TODO: change for most use cases working
      ]),
      link: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.pattern('^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$'),
      ]),
      price: new FormControl(null, [Validators.required, Validators.min(5)]),
    });
  }

  onSubmit() {
    this.eventemitterItemData.emit(this.itemForm.value);
  }
}
