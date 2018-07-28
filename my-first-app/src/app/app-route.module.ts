import { HeaderComponent } from "./header/header.component"
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ErrorComponent } from './error/error.component'
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeStartComponent } from "src/app/recipes/recipe-start/recipe-start.component";
import { Component } from "@angular/core/src/metadata/directives";
import { RecipeEditComponent } from "src/app/recipes/recipe-edit/recipe-edit.component";
const routes: Routes = [{ path: 'recipes', component: RecipesComponent,children:[
    {path:'',component:RecipeStartComponent},
    {path:"new",component:RecipeEditComponent},
    {path:':id',component:RecipeDetailComponent},
    {path:':id/edit',component:RecipeEditComponent}
] },
{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
{ path: 'shoppingList', component: ShoppingListComponent }

]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {

}