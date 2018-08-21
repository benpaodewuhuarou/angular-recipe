import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from "src/app/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "src/app/recipes/recipe-edit/recipe-edit.component";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "src/app/auth/auth-guard.service";
import {NgModule} from '@angular/core';
const routes:Routes =[{
        path: '', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: "new", component: RecipeEditComponent,canActivate:[AuthGuard]},
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent,canActivate:[AuthGuard]},
        ]
}]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class RecipesRoutingMoudle{}