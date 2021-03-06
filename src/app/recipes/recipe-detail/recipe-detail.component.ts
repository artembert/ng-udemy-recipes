import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipie.model';
import {RecipeService} from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {
    @Input() public recipe: Recipe;

    public constructor(private recipeService: RecipeService) {
    }

    public ngOnInit(): void {
    }

    public onAddIngredientsToShoppingList(): void {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }

}
