import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipie.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
    @Output() public selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    public recipes: Array<Recipe> = [
        new Recipe('A Test Recipe', 'Just a description to test recipe', 'https://via.placeholder.com/300x100'),
        new Recipe('A Second Test Recipe', 'Just a description to second test recipe', 'https://via.placeholder.com/300x100'),
    ];

    constructor() {
    }

    public ngOnInit(): void {
    }

    public onSelectRecipe2(recipe: Recipe): void {
        this.selectedRecipe.emit(recipe);
    }
}
