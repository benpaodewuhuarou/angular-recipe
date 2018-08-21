import { NgModule } from "@angular/core";
import { RecipesComponent } from "src/app/recipes/recipes.component";
import { RecipeListComponent } from "src/app/recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "src/app/recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "src/app/recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "src/app/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "src/app/recipes/recipe-edit/recipe-edit.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingMoudle } from "./recipes-route.module";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations:[
        RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingMoudle,
        SharedModule
    ],
    providers:[]
    
})
export class RecipesModule{

}