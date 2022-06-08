//Base
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

//AngularFire
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { canActivate, hasCustomClaim, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

//Additions
import { AuthService } from 'src/services/auth.service';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { LoginComponent } from './login/login.component';
import { FirestoreTestComponent } from './firestore-test/firestore-test.component';
import { UserService } from 'src/services/user.service';
import { AdminAuthGuard } from 'src/services/admin-auth-guard.service';
import { ProductComponent } from './product/product.component';
import { CategoryService } from 'src/services/category.service';
import { FormsModule } from '@angular/forms';






const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectAuthorizedToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'login', component:LoginComponent, ...canActivate(redirectAuthorizedToHome)},
  {path: 'shopping-cart', component:ShoppingCartComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'my/orders', component:MyOrdersComponent, ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'admin/orders', component:ManageOrdersComponent, canActivate: [AdminAuthGuard]},
  {path: 'admin/products', component:ManageProductsComponent, canActivate:[AdminAuthGuard]},
  {path: 'admin/products/new', component:ProductComponent, canActivate:[AdminAuthGuard]}
];

@NgModule({
declarations: [
    AppComponent,
    NavBarComponent,
    MyOrdersComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
    LoginComponent,
    FirestoreTestComponent,
    ShoppingCartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule,
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [
    AuthService,
    AngularFireAuth,
    UserService,
    CategoryService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
