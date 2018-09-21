import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredients } from '../../ingredients/ingredient.model';
import { IngredientService } from '../../ingredients/ingredient.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  recipe: Recipe = new Recipe('Frankie', 'Frankie, also spelled Franky, is sometimes a given name, but more often it is a hypocorism, an affectionate variation of a personal name, usually Frank or Francis .... ', './assets/frankie.jpg',
    [
      new Ingredients('Roties', 4),
      new Ingredients('Green peas', 10),
      new Ingredients('Potato', 4),
    ]);

  constructor(private recipeService: RecipeService, private ingService: IngredientService) { }

  ngOnInit() {
    this.recipeService.recipeEvent.subscribe(rec => {
      this.recipe = rec;
    });
  }
  onAdd() {
    this.ingService.onAddIngre(this.recipe.ingredients);
  }

}
