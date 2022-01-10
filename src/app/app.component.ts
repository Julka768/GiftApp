import { Component } from '@angular/core';
import { ItemData } from './models/item-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Learning';
  kamila: ItemData = new ItemData(
    'Nazwa przedmiotu',
    'Link do przedmiotu',
    28,
    'https://swiat-obrazkow.pl/obrazy/4/300/pokemon_obrazki_pokemonow_pokemony_469.jpg'
  );

  itemList: ItemData[] = [this.kamila];

  onItemDataAdded(event: ItemData) {
    this.itemList.push(event);
  }
}
