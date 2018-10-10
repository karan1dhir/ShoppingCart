import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CartComponent } from "./cart/cart.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { HomeComponent } from "./home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { CardComponent } from "./card/card.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    WishlistComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
