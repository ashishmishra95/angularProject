import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { IngredientService } from '../../ingredients/ingredient.service';
import { Ingredients } from '../../ingredients/ingredient.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ing: Ingredients[] = [];

  constructor(private ingService: IngredientService) { }
  ngOnInit() {


    this.ingService.ingEvent.subscribe((ing: Ingredients[]) => {
      this.ing = ing;
      // console.log(ing[0]);

    });
    this.ing = this.ingService.getIngredients();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const  ingredientsModel = new Ingredients(value.name,value.amount);
    this.ingService.onAddIngre([ingredientsModel]);
   


  }


}
