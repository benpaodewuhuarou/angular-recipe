import { HeaderComponent } from "./header/header.component"
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ErrorComponent } from './error/error.component'
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { Component } from "@angular/core/src/metadata/directives";

import { SignupComponent } from "./auth/signup/signup.component"
import { from } from "rxjs/internal/observable/from";
import {SigninComponent} from "./auth/signin/signin.component"
import { AuthGuard } from "src/app/auth/auth-guard.service";
import { HomeComponent } from "src/app/home/home/home.component";
const routes: Routes = [
{ path: '', component:HomeComponent, pathMatch: 'full' },
{ path: 'shoppingList', component: ShoppingListComponent },
{path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},
{path:'signup',component:SignupComponent},
{path:'signin',component:SigninComponent}
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