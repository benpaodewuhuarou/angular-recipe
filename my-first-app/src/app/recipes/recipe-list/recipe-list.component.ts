import { Component, OnInit} from '@angular/core';
import {Recipe}from '../recipe-model';
import {RecipeService}from '../recipe.service'

import { Router } from '@angular/router';
import { relative } from 'path';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
  
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  private subscription : Subscription;
  constructor(private recipeService:RecipeService,
  private router: Router,
  private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.changeRecipes.subscribe(
      (recipe:Recipe[])=>{
        this.recipes = recipe;
      })
  }
  onNewRecipe(){
    
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
