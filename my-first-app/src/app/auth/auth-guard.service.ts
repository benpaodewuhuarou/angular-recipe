import { CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { AuthService } from "src/app/auth/auth.service";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth:AuthService){

    }
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        return this.auth.auth();
    }
}