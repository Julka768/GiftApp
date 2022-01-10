import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemData } from '../models/item-data';

@Component({
  selector: 'app-item-data-list',
  templateUrl: './item-data-list.component.html',
  styleUrls: ['./item-data-list.component.scss'],
})
export class ItemDataListComponent implements OnInit {
  @Input() itemDataList: ItemData[] = [];
  @Output() eventemitterRemoveItem = new EventEmitter<ItemData>();
  constructor() {}

  ngOnInit() {}

  remove(item: ItemData): void {
    this.eventemitterRemoveItem.emit(item);
  }
}
