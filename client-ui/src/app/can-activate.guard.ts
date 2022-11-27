import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { CognitoService } from "./services/cognito.service";


@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private router: Router, private service: CognitoService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.service.isAuthenticated();
  }
}
