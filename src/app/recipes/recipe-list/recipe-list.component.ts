import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new  Recipe('Test Recipe', 'Test description', 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new  Recipe('Better Recipe', 'Good Stuff', 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
  ];

  @Output() recipeEleSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe:Recipe){
    this.recipeEleSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
