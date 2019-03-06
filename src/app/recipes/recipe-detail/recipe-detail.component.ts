import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipie.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {
    @Input() public recipe: Recipe;

    public constructor() {
    }

    public ngOnInit(): void {
    }

}
