import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { SeccionPrincipalComponent } from './seccion-principal/seccion-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuLateralComponent,
    SeccionPrincipalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
