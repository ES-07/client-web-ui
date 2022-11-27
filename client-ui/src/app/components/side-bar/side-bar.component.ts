import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CognitoService } from 'src/app/services/cognito.service';
import { OwnerService } from 'src/app/services/owner.service';
import { Owner } from 'src/app/classes/Owner';

@UntilDestroy()
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  owner_name! : string;

  constructor(private observer: BreakpointObserver, private router: Router, private service: CognitoService, private owner_service: OwnerService) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });

    this.getOwner();
  }


  signOutWithCognito() {
    this.service.signOut()
    .then(() => {
      this.router.navigate(['/login'])
    })  
  }

  getOwner() {
    this.service.getOwner()
    .then((user: any) => {
      this.owner_name = user.attributes.name
    });
  }
}