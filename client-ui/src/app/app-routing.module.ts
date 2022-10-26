import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntrusionComponent } from './pages/intrusion/intrusion.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { PropertyComponent } from './pages/property/property.component';

const routes: Routes = [

  { path: '', component: MainComponent },

  { 
    path: 'property', children: [
      { path: '', component: MainComponent },
      { path: ':id', component: PropertyComponent }
    ]
  },

  { path: 'intrusion', component: IntrusionComponent },

  { path: 'login', component: LoginComponent },
  /* { path: '', redirectTo: '/login', pathMatch: 'full'}, */
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
