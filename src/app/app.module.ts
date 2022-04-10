import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; /* importo libreria de rutas */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NametagComponent } from './tag/nametag/nametag.component';
import { TopBarComponent } from './topBar/top-bar/top-bar.component';
import { MitagComponent } from './presentacion/mitag/mitag.component';
import { FormacionComponent } from './formacion/formacion.component';
import { LapizComponent } from './edit/lapiz/lapiz.component'

/* Declaro una constante en donde le asigno una lista de rutas */
const routes: Routes = [
  /* Rutas Generales */
  { path: 'formacion', component: FormacionComponent },

  /* En el caso de no tener una ruta en el url se mostrara lo que hay en la siguiente
  linea de ruta o path */
  { path: '**', component: MitagComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AvatarComponent,
    NametagComponent,
    TopBarComponent,
    MitagComponent,
    FormacionComponent,
    LapizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
