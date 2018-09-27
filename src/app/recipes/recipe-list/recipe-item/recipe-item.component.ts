import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { Ingredients } from '../../../ingredients/ingredient.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  url = 'https://fir-72a37.firebaseio.com/recipe.json';
  rs: Recipe[]  = [

    new Recipe(
      'PIZZA',
      'Pizza is a savoury dish of Italian origin, consisting of a usually round base of leavened ... The term pizza was first recorded in the 10th century, in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.',
      './assets/pizza.jpg',
      [
        new Ingredients('Tomato', 10),
        new Ingredients('cheese', 10),
        new Ingredients('Butter', 10),
        new Ingredients('Chicken', 12),
      ]
    ),
    new Recipe('BURGER', 'A hamburger, beefburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.', './assets/burger.jpg',
      [
        new Ingredients('Onions', 3),
        new Ingredients('Buns', 2),
        new Ingredients('Chile', 3),

      ]
    ),
    new Recipe('Frankie', 'Frankie, also spelled Franky, is sometimes a given name, but more often it is a hypocorism, an affectionate variation of a personal name, usually Frank or Francis .... ', 'assets/frankie.jpg',
      [
        new Ingredients('Roties', 4),
        new Ingredients('Green peas', 10),
        new Ingredients('Potato', 4),
      ]
    )
  ];

  constructor(private recipeService: RecipeService, private http: HttpClient) { }

  ngOnInit() {
    // // this.http.get(this.url).subscribe((recipeList: Recipe[]) => {
    // //   // this.rs = recipeList;
    // //   console.log(recipeList);
      
    // });
  }

  onSelect(recipe: Recipe) {
    this.recipeService.recipeSelected(recipe);
  }

}
