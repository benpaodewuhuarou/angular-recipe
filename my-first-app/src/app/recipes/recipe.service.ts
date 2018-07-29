import {Recipe} from './recipe-model';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class RecipeService{
    private recipes: Recipe[] =[
        new Recipe('junk food',
        'not health',
        'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg',
        [new Ingredient('meat',1),
         new Ingredient('onion',2)
    ]),

        new Recipe('junk food junior','not health','https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg',[new Ingredient('apple',2)])
        
      ];

    getRecipes(){
        return this.recipes.slice(); 
    }
    getRecipe(index:number){
        return this.recipes.slice()[index];
    }
}