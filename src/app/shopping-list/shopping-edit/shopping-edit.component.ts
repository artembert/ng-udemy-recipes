import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.less']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') public nameInputReference: ElementRef;
    @ViewChild('amountInput') public amountInputReference: ElementRef;

    public constructor(private shoppingListService: ShoppingListService) {}

    public ngOnInit(): void {
    }

    public onAddIngredient(): void {
        const name: string = this.nameInputReference.nativeElement.value;
        const amount: number = this.amountInputReference.nativeElement.value;
        const newIngredient = new Ingredient(name, amount);
        this.shoppingListService.addIngredient(newIngredient);
    }
}
