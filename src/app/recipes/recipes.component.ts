import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipie.model';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.less'],
    providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
    public selectedRecipe: Recipe|undefined;

    constructor(private recipeService: RecipeService) {
    }

    public ngOnInit(): void {
        this.recipeService.selectedRecipe
            .subscribe(
                (recipe: Recipe): void => {
                    this.selectedRecipe = recipe;
                }
            );
    }
}
