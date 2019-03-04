import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipie.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = [
    new Recipe('A Test Recipe', 'Just a description to test recipe', 'https://via.placeholder.com/150'),
    new Recipe('A Second Test Recipe', 'Just a description to second test recipe', 'https://via.placeholder.com/150'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
