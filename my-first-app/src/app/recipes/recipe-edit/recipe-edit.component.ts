import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { Params } from '@angular/router';
import { FormGroup, FormControl,FormArray,Validators} from '@angular/forms';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { RecipeItemComponent } from 'src/app/recipes/recipe-list/recipe-item/recipe-item.component';
import { Recipe } from 'src/app/recipes/recipe-model';




@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id:number;
editMode = false;
form:FormGroup;
  constructor(private route: ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] !=null;
        this.initForm();
      }
    )
  }
  private initForm(){
  
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredients.push(new FormGroup({
            'name':new FormControl(ingredient.name,Validators.required),
            'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
    this.form = new FormGroup({
      'recipeName':new FormControl(recipeName,Validators.required),
      'recipeDescription': new FormControl(recipeDescription,Validators.required),
      'recipeImagePath':new FormControl(recipeImagePath,Validators.required),
      'ingredients':recipeIngredients
    })
  }
  onSubmit(){
    const recipe = new Recipe(this.form.value['recipeName'],this.form.value['recipeDescription'],this.form.value['recipeImagePath'],this.form.value['ingredients'])
    if(this.editMode){
      this.recipeService.updateRecipes(this.id,recipe)
    }else{
      this.recipeService.addRecipes(recipe)
    }
    this.onCancel();
  }
  AddIngreditent(){
    (<FormArray>this.form.get('ingredients')).push(new FormGroup({
      'name':new FormControl(null,Validators.required),
    'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
  deleteIngredient(index:number){

    (<FormArray>this.form.get('ingredients')).removeAt(index);
  }
}
