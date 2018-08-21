import { Component } from "@angular/core";
import {Service}from "../server.service"
import { Response } from "@angular/http";
import { AuthService } from "src/app/auth/auth.service";
@Component({
    selector:'header',
    templateUrl:'./header.component.html'
    
})
export class HeaderComponent{
    constructor(private service:Service,private authCurrent:AuthService){}
   
   onSave(){
     this.service.storeRecipes().subscribe(
         (response:Response)=>{
            console.log(response);
         }
     );
   }
   fetchRecipes(){
       this.service.getReipes();
   }
   onLogout(){
       this.authCurrent.logout();
   }
}