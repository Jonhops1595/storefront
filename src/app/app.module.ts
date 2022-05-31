//Base
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//AngularFire
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//Additions
import { AuthService } from 'src/services/auth.service';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { LoginComponent } from './login/login.component';
import { FirestoreTestComponent } from './firestore-test/firestore-test.component';




const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'login', component:LoginComponent},
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
    ManageProductsComponent,
    LoginComponent,
    FirestoreTestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    AngularFireAuthModule
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
    AngularFireAuth
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
