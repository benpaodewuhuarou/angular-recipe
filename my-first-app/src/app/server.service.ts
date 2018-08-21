import { Injectable } from "@angular/core";
import {RecipeService}from"./recipes/recipe.service"
import { Http,Response} from "@angular/http";
import {Recipe} from "./recipes/recipe-model";
import { map } from 'rxjs/operators';
import { AuthService } from "src/app/auth/auth.service";

@Injectable()
export class Service {
    constructor( private http:Http,private recipeService:RecipeService,private auth:AuthService){
    }

    storeRecipes(){
        const token = this.auth.getToken()
       return  this.http.put("https://recipe-test-dde91.firebaseio.com/recipes.json?auth="+token
            ,this.recipeService.getRecipes())
    }
    getReipes(){
        const token = this.auth.getToken()
        this.http.get("https://recipe-test-dde91.firebaseio.com/recipes.json?auth="+token)
        .pipe(map(
            (response:Response)=>{
                
                const recipes = response.json();
                
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        recipe['ingredients']=[];
                    }
                }
                return recipes;
            }
        )).subscribe(
            (recipe:Recipe[])=>{
                this.recipeService.fetchRecipes(recipe);
            }
        )
    }
}