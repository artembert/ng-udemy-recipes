import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Array<Ingredient>;
  constructor(private shoppingListService: ShoppingListService) { }

  public ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged
        .subscribe(
            (ingredients: Array<Ingredient>) => {
              this.ingredients = ingredients;
            });
  }
}
