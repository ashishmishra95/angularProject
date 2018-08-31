import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeEvent = new EventEmitter<Recipe>();
  constructor() { }

  recipeSelected(recipe: Recipe) {
    this.recipeEvent.emit(recipe);
  }
}
