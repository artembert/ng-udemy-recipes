import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipie.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.less']
})
export class RecipesComponent implements OnInit {
    public selectedRecipe: Recipe|undefined;

    constructor() {
    }

    public ngOnInit(): void {
    }

    public choseRecipe(recipe: Recipe): void {
      this.selectedRecipe = recipe;
    }
}
