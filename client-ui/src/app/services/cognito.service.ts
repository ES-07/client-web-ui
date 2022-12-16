import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Device } from '../classes/Device';
import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { Owner } from '../classes/Owner';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  private authenticationSubject: BehaviorSubject<any>;

  constructor(private router: Router) {
    Amplify.configure({
      Auth: environment.cognito,
      Analytics: {
        disabled: true,
      },
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public signUp(owner: Owner): Promise<any> {
    return Auth.signUp({
      username: owner.email,
      password: owner.hashed_password,
      attributes: {
        birthdate: owner.birthday,
        address: owner.address,
        phone_number: owner.cellphone,
        name: owner.name,
      },
    });
  }

  public confirmSignUp(user: Owner, code: string): Promise<any> {
    return Auth.confirmSignUp(user.email, code);
  }

  public getOwner(): Promise<any> {
    return Auth.currentUserInfo();
  }

  public signIn(email: string, pass: string): Promise<any> {
    return Auth.signIn(email, pass).then(() => {
      this.authenticationSubject.next(true);
    });
  }

  public signOut(): Promise<any> {
    return Auth.signOut().then(() => {
      this.authenticationSubject.next(false);
    });
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getOwner()
        .then((user: any) => {
          if (user) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        })
        .catch(() => {
          this.router.navigate(['/login']);
          return false;
        });
    }
  }
}
