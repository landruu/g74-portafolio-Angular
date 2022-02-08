import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NametagComponent } from './tag/nametag/nametag.component';
import { TopBarComponent } from './topBar/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AvatarComponent,
    NametagComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
