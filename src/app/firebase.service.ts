import { Injectable, OnInit } from '@angular/core';

import { Recipe } from './recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnInit {
  recipe: AngularFireList<Recipe[]> = this.angularFire.list('recipe');
  constructor(private angularFire: AngularFireDatabase, private http: HttpClient) { }

  ngOnInit() {
  }

  // putData(rec: Recipe) {
  //   console.log(this.angularFire.database);
  //   this.recipe.push([rec]);
  // }

  putHttpData(rec: Recipe) {
    this.http.post('https://fir-72a37.firebaseio.com/recipe.json', rec)
      .subscribe(res => {
      console.log(res);
      }
    );
  }
}
