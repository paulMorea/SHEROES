import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ChooseHerosService } from '../choose-heros.service';


@Component({
  selector: 'app-selectplayer',
  templateUrl: './selectplayer.component.html',
  styleUrls: ['./selectplayer.component.css'],
  
})
export class SelectplayerComponent implements OnInit {

  heros;
  tabHeros = [];
  nbrPlayer = 0 ;
  player = [];

  constructor(private http: HttpClient,
              private router: Router,
              private chooseHeros: ChooseHerosService) { }

  ngOnInit() {
    this.listPlayer();

  }

  listPlayer() {

    let myHeros = this.http.get('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json').subscribe(heros => {
      console.log(heros);
      this.heros = heros;




      let i = 0;
      while (i < 8) {
        let num = Math.floor(Math.random() * this.heros.length);
        this.tabHeros[i] = heros[num];
        i++;
      }
      console.log(this.tabHeros);




    });

  }

  choosePlayer(index) {
    this.player[this.nbrPlayer] = this.tabHeros[index];
    this.nbrPlayer = this.nbrPlayer + 1 ;
    if(this.player.length == 2 ){
      this.router.navigate(['gamepage']);
    }
    
  }





}

