import { ProfileComponent } from './pages/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntrusionComponent } from './pages/intrusion/intrusion.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { PropertyComponent } from './pages/property/property.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CanActivateGuard } from './can-activate.guard';


const routes: Routes = [

  { path: '', component: SideBarComponent, canActivate: [CanActivateGuard], children: [

      { path: '', component: MainComponent },

      { path: 'property', children: [
        { path: '', component: MainComponent },
        { path: ':id', component: PropertyComponent }
        ]
      },

      { path: 'intrusion', component: IntrusionComponent },

      { path: 'profile', component: ProfileComponent },
    ] 
  },

  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
