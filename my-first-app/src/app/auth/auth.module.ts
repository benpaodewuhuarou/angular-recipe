import { NgModule } from "@angular/core";
import { SigninComponent } from "src/app/auth/signin/signin.component";
import { SignupComponent } from "src/app/auth/signup/signup.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        SignupComponent,

        
        SigninComponent,
    ],
    imports:[
        FormsModule,
    ]
})
export class AuthModule{

}