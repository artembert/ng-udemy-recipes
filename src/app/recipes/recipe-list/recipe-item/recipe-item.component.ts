import {Component, Input, OnInit } from '@angular/core';
import {Recipe} from '../../recipie.model';
import {RecipeService} from '../../recipe.service';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent implements OnInit {
    @Input() public recipe: Recipe;

    constructor(private recipeService: RecipeService) {}

    public ngOnInit(): void {
    }

    public onSelectRecipe(): void {
        this.recipeService.selectedRecipe.emit(this.recipe);
    }

}
