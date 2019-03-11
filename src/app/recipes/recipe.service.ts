import {Recipe} from './recipie.model';
import {EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    public selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    public recipes: Array<Recipe> = [
        new Recipe(
            'Tasty Schnitzel',
            'Just a description to test recipe',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/320px-Wiener-Schnitzel02.jpg?uselang=ru',
            [
                new Ingredient('Meat', 1),
                new Ingredient('french Fries', 20)
            ]
        ),
        new Recipe(
            'Big Burger',
            'Just a description to second test recipe',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/320px-RedDot_Burger.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bread', 2),
                new Ingredient('Tomato', 2),
            ]
        ),
    ];

    public getRecipes(): Array<Recipe> {
        return this.recipes.slice(); // return the same array
    }

    public addRecipe(): void {

    }
}
