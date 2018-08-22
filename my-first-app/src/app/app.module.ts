import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent}from "./header/header.component"
import { AppComponent } from './app.component';
import { DropdownDirection } from'./shared/dropdown.directive'
import { ShoppinglistService } from 'src/app/shopping-list/shopping-list.service';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-route.module';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';
import {RecipeService} from './recipes/recipe.service';
import {Service}from "./server.service"
import { HttpModule } from '@angular/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthGuard } from 'src/app/auth/auth-guard.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home/home.component';
import { ShoppingListModule } from 'src/app/shopping-list/shoppingList.module';
import { AuthModule } from 'src/app/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
   
  ],
  providers: [ShoppinglistService,RecipeService,Service,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
