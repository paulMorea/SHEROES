import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectplayerComponent } from './selectplayer/selectplayer.component';
import { GamepageComponent } from './gamepage/gamepage.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'selectplayer', component: SelectplayerComponent },
  { path: 'gamepage', component: GamepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectplayerComponent,
    GamepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
