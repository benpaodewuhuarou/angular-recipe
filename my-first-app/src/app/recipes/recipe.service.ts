import {Recipe} from './recipe-model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subject } from 'rxjs';
import { RecipeEditComponent } from 'src/app/recipes/recipe-edit/recipe-edit.component';

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
    fetchRecipes(recipe:Recipe[]){
        this.recipes = recipe;
        this.changeRecipes.next(this.recipes.slice());
    }
    changeRecipes = new Subject<Recipe[]>();
    getRecipes(){
        return this.recipes.slice(); 
    }
    addRecipes(recipe:Recipe){
        this.recipes.push(recipe);
        this.changeRecipes.next(this.recipes.slice());
    } 
    updateRecipes(index:number,recipe:Recipe){
        this.recipes[index] = recipe;
        this.changeRecipes.next(this.recipes.slice());
    }
    getRecipe(index:number){
        return this.recipes.slice()[index];
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.changeRecipes.next(this.recipes.slice());
    }
}