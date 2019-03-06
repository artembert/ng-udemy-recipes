import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipie.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent implements OnInit {
    @Input() public recipe: Recipe;

    constructor() {
    }

    public ngOnInit(): void {
    }

}
