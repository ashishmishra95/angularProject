import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Subscription } from '../../../node_modules/rxjs';
import { Response } from "@angular/http";
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() itemSelected = new EventEmitter<string>();
  recipe: Recipe;
  subscription: Subscription;
  constructor(private recipeService: RecipeService, private fb: FirebaseService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeEvent.subscribe(rec => {
      this.recipe = rec;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSelect(item: string) {
    this.itemSelected.emit(item);
  }

  sendData() {
    this.fb.putHttpData(this.recipe);
  }

}
