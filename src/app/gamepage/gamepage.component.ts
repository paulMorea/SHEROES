import { Component, OnInit } from '@angular/core';
import { ChooseHerosService } from '../choose-heros.service';

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.css']
})
export class GamepageComponent implements OnInit {
  
  player1 = this.chooseHeros.players[0];
  player2 = this.chooseHeros.players[1];


  constructor(private chooseHeros: ChooseHerosService) { }

  ngOnInit() {
    
   

   console.log(this.player1);
   console.log(this.player2);
  }

  
  

}
