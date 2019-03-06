import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 8),
  ];
  constructor() { }

  public ngOnInit(): void {
  }

  public onAddIngredient(newIngredient: Ingredient): void {
      this.ingredients.push(newIngredient);
  }
}
