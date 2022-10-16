import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PropertyComponent } from './pages/property/property.component';

const routes: Routes = [

  { path: '', component: MainComponent },

  { 
    path: 'property', children: [
      { path: ':id', component: PropertyComponent }
    ]
  },

  /* 
  exemplo de TQS
  { 
    path: 'category', children: [
      { path: '', component: CategoryComponent },
      { path: ':id', component: CategoryComponent }
    ]
  },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'cart', component: CartComponent },

  { path: 'lists', component: ListsComponent },

  { path: 'orders', component: OrdersComponent },

  { path: 'addresses', component: AddressesComponent }, 
  */
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
