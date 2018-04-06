import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectplayerComponent } from './selectplayer/selectplayer.component';
import { GamepageComponent } from './gamepage/gamepage.component';
import { ChooseHerosService } from './choose-heros.service';

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
    GamepageComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ChooseHerosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
