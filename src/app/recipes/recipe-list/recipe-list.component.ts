import {Component, OnInit } from '@angular/core';
import {Recipe} from '../recipie.model';
import {RecipeService} from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
    public recipes: Array<Recipe>;

    constructor(private recipeService: RecipeService) {}

    public ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
    }
}
