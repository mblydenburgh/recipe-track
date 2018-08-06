import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  addedIngredient: Ingredient;

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredientData: Ingredient){
    //console.log(ingredientData.name);
    this.ingredients.push(ingredientData);
  }

}
