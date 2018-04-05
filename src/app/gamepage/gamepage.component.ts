import { Component, OnInit } from '@angular/core';
import { ChooseHerosService } from '../choose-heros.service';

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.css']
})
export class GamepageComponent implements OnInit {

 player;

  constructor(private chooseHeros: ChooseHerosService) { }

  ngOnInit() {
  }

}
