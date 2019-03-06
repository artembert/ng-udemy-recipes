import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipie.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent implements OnInit {
    @Input() public recipe: Recipe;
    @Output() public selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    constructor() {
    }

    public ngOnInit(): void {
    }

    public onSelectRecipe(recipe: Recipe): void {
        this.selectedRecipe.emit(recipe);
    }

}
