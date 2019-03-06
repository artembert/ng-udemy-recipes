import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.less']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') public nameInputReference: ElementRef;
    @ViewChild('amountInput') public amountInputReference: ElementRef;
    @Output() public ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    public constructor() {
    }

    public ngOnInit(): void {
    }

    public onAddIngredient(): void {
        const name: string = this.nameInputReference.nativeElement.value;
        const amount: number = this.amountInputReference.nativeElement.value;
        const newIngredient = new Ingredient(name, amount);
        this.ingredientAdded.emit(newIngredient);
    }
}
