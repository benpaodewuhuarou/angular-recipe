import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import {Subject}from 'rxjs';

export class ShoppinglistService{
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredients : Ingredient[]=[
        new Ingredient('apple',2),
        new Ingredient('banana',3)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredientFromRecipe(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients);
    }
}