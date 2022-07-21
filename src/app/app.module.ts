import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; /* importo libreria de rutas */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TopBarComponent } from './topBar/top-bar/top-bar.component';
import { MitagComponent } from './presentacion/mitag/mitag.component';
import { FormacionComponent } from './formacion/formacion.component';
import { LapizComponent } from './edit/lapiz/lapiz.component';
import { AppLoginComponent } from './login/app-login/app-login.component';
import { HomeComponent } from './body/home/home.component';
import { AddBtnComponent } from './edit/add-btn/add-btn.component';
import { DelBtnComponent } from './edit/del-btn/del-btn.component';
import { ExperienciaComponent } from './experiencia/experiencia/experiencia.component';
import { SkillComponent } from './skill/skill.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { FooterComponent } from './footer/footer.component';

/* Declaro una constante en donde le asigno una lista de rutas */
const routes: Routes = [
  /* Rutas Generales */
  { path: 'logearse', component: AppLoginComponent },
  /* Ruta por default, contiene a todos los elementos del body */
  { path: '', component: HomeComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AvatarComponent,
    TopBarComponent,
    MitagComponent,
    FormacionComponent,
    LapizComponent,
    AppLoginComponent,
    HomeComponent,
    AddBtnComponent,
    DelBtnComponent,
    ExperienciaComponent,
    SkillComponent,
    ProyectoComponent,
    FooterComponent,
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
