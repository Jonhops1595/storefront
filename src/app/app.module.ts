import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'shopping-cart', component:ShoppingCartComponent},
  {path: 'my/orders', component:MyOrdersComponent},
  {path: 'admin/orders', component:ManageOrdersComponent},
  {path: 'admin/products', component:ManageProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyOrdersComponent,
    ManageOrdersComponent,
    ManageProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
