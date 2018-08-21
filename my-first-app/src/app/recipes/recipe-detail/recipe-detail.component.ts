import { Component, OnInit} from '@angular/core';
import {Recipe}from '../recipe-model'
import { ShoppinglistService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id:number;
  constructor( private slService: ShoppinglistService,
               private route:ActivatedRoute,
               private router:Router,
               private r:RecipeService) { }
  

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.recipe = this.r.getRecipe(this.id);
      }
    )
  }
  addToShopList(){
    this.slService.addIngredientFromRecipe(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  deleteRecipe(){
    this.r.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
