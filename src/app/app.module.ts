import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, ProductsModule,CartsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
