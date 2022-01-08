import { Component } from '@angular/core';
import { ItemData } from './models/item-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Learning';
  kamila: ItemData = new ItemData('Kamila', 'Krxywdinska', 28);

  itemList: ItemData[] = [
    new ItemData('Ola', 'Czerwinska', 29),
    new ItemData('Julia', 'Czerwinska', 21),
    this.kamila,
  ];

  onItemDataAdded(event: ItemData) {
    this.itemList.push(event);
  }
}
