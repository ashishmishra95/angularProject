import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Ingredients } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  ingEvent = new Subject<Ingredients[]>();
  ingredients: Ingredients[] = [];

  onAddIngre(ing: Ingredients[]) {
    this.ingredients.push(...ing);
    this.ingEvent.next(this.ingredients.slice());
    // console.log(this.ingredients[0]);
  }

  getIngredients(): Ingredients[] {
    return this.ingredients.slice();
  }

  constructor() { }
}
