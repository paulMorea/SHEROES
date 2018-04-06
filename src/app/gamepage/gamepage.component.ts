import { Component, OnInit, NgModule } from '@angular/core';
import { ChooseHerosService } from '../choose-heros.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [NgbModule]
})

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.css']
})
export class GamepageComponent implements OnInit {

  player1 = this.chooseHeros.players[0];
  player2 = this.chooseHeros.players[1];
  num;
  num1;
  num2;
  num3;
  health = this.player1.powerstats.strength/4 +'%';
  health2 = this.player2.powerstats.strength/4 +'%';
  armor = this.player1.powerstats.durability/4 +'%';
  armor2 = this.player1.powerstats.durability/4 +'%';
  turn = 0;

  constructor(private chooseHeros: ChooseHerosService) { }

  ngOnInit() {


    this.ditributeCards()
    console.log(this.player1);
    console.log(this.player2);
  }

  ditributeCards() {
    this.spellHeal();
    this.spellDef();
    this.spellCAC();
    this.spellMagic();
    this.spellHealbis();
    this.spellDefbis();
    this.spellCACbis();
    this.spellMagicbis();
    }

  spellHeal() {
    this.num = Math.random() * 9.99;
    console.log(this.num);
    this.player1.cards = [];
    this.player1.cards[0] = {};    
    if (0 <= this.num && this.num < 3) {
      this.player1.cards[0].text ='+20% of health';
      // document.getElementById("placecardP1C1").innerHTML = "+ 20% de vie";
    }
    if (3 < this.num && this.num < 6) {
      // document.getElementById("placecardP1C1").innerHTML = "+ 9 de vie";
      this.player1.cards[0].text ='+9 of health';

    }
    if (6 < this.num && this.num < 9) {
      // document.getElementById("placecardP1C1").innerHTML = "+ 4 de vie et + 6 d'armure";
      this.player1.cards[0].text ='+ 4 of health and + 6 of Armor';
    }
    if (9 < this.num && this.num < 10) {
      // document.getElementById("placecardP1C1").innerHTML = "+ 9 de vie et + 4 d'attaque";
      this.player1.cards[0].text ='+9 of health and + 4 power fight';
    }
    
  }
  okHeal() {
    if (0 <= this.num && this.num < 3) {
      this.player1.powerstats.strength = this.player1.powerstats.strength * 1.2 * ((this.player1.powerstats.intelligence/100) +0.5 );
    }
    if (3 < this.num && this.num < 6) {
      this.player1.powerstats.strength = this.player1.powerstats.strength + 9 * ((this.player1.powerstats.intelligence/100) +0.5 );
    }
    if (6 < this.num && this.num < 9) {
      this.player1.powerstats.strength = this.player1.powerstats.strength + 4 * ((this.player1.powerstats.intelligence/100) +0.5 );
      this.player1.powerstats.durability = this.player1.powerstats.durability + 6 * ((this.player1.powerstats.intelligence/100) +0.5 );
    }
    if (9 < this.num && this.num < 10) {
      this.player1.powerstats.strength = this.player1.powerstats.strength + 9 * ((this.player1.powerstats.intelligence/100) +0.5 );
      this.player1.powerstats.combat = this.player1.powerstats.combat + 4 * ((this.player1.powerstats.intelligence/100) +0.5 );
    }
    this.health = this.player1.powerstats.strength +'%';
    this.armor = this.player1.powerstats.durability +'%';
    if(this.player1.powerstats.strength > 100){
      this.player1.powerstats.strength = 100;
    }
    if(this.player1.powerstats.durability > 100){
      this.player1.powerstats.durability = 100;
    }
    this.ditributeCards();
    this.turn = 1;
  }

  spellDef() {
    this.player1.cards[1] = {}; 
    this.num1 = Math.random() * 9.99;
    console.log(this.num1);
    if (0 <= this.num1 && this.num1 < 3) {
      this.player1.cards[1].text ='+20% of Armor';
      // document.getElementById("placecardP1C2").innerHTML = "+ 20% Armor";
    }
    if (3 < this.num1 && this.num1 < 6) {
      this.player1.cards[1].text ='+9 of Armor';
      // document.getElementById("placecardP1C2").innerHTML = "+ 9 Armor ";
    }
    if (6 < this.num1 && this.num1 < 9) {
      this.player1.cards[1].text ='+4 of Armor and + 6 of health';
      // document.getElementById("placecardP1C2").innerHTML = "+ 4 Armor and + 6 Life";
    }
    if (9 < this.num1 && this.num1 < 10) {
      this.player1.cards[1].text ='+9 of Armor and  + 4 power fight';
      // document.getElementById("placecardP1C2").innerHTML = "+ 9 Armor et + 4 Attack Power";
    }
    
  }
  okDef() {
    if (0 <= this.num1 && this.num1 < 3) {
      this.player1.powerstats.durability = this.player1.powerstats.durability * 1.2 * (this.player1.powerstats.power/100 +0.5 );
    }
    if (3 < this.num1 && this.num1 < 6) {
      this.player1.powerstats.durability = this.player1.powerstats.durability + 9 * (this.player1.powerstats.power/100 +0.5 );
    }
    if (6 < this.num1 && this.num1 < 9) {
      this.player1.powerstats.strength = this.player1.powerstats.strength + 6 * (this.player1.powerstats.power/100 +0.5 );
      this.player1.powerstats.durability = this.player1.powerstats.durability + 4 * (this.player1.powerstats.power/100 +0.5 );
    }
    if (9 < this.num1 && this.num1 < 10) {
      this.player1.powerstats.durability = this.player1.powerstats.durability + 9 * (this.player1.powerstats.power/100 +0.5 );
      this.player1.powerstats.combat = this.player1.powerstats.combat + 4 * (this.player1.powerstats.power/100 +0.5 );
    }
    this.armor = this.player1.powerstats.durability +'%';
    this.health = this.player1.powerstats.strength +'%';
    if(this.player1.powerstats.durability > 100){
      this.player1.powerstats.durability = 100;
    }
    if(this.player1.powerstats.strength > 100){
      this.player1.powerstats.strength = 100;
    }
    this.ditributeCards();
    this.turn = 1;
    
  }

  spellCAC() {
    this.num2 = Math.random() * 9.99;
    console.log(this.num2);
    this.player1.cards[2] = {}; 
    if (0 <= this.num2 && this.num2 < 3) {
      this.player1.cards[2].text ='Attack 20%';
      // document.getElementById("placecardP1C3").innerHTML = "+ 20% Armor";
    }
    if (3 < this.num2 && this.num2 < 6) {
      this.player1.cards[2].text =' Attack 9 pv';
      // document.getElementById("placecardP1C3").innerHTML = "+ 9 Armor ";
    }
    if (6 < this.num2 && this.num2 < 9) {
      this.player1.cards[2].text =' Attack 6 pv and recup 6 heal';
      // document.getElementById("placecardP1C3").innerHTML = "+ 4 Armor and + 6 Life";
    }
    if (9 < this.num2 && this.num2 < 10) {
      this.player1.cards[2].text =' Attack 6 pv + 20% and recup 6 heal';
      // document.getElementById("placecardP1C3").innerHTML = "+ 9 Armor et + 4 Attack Power";
    }
  }
  okCAC() {
    if (0 <= this.num2 && this.num2 < 3) {
      if(this.player2.powerstats.durability > 0) {
        this.player2.powerstats.durability = (this.player2.powerstats.durability * 0.8) - (this.player1.powerstats.combat/10  );
      } else {
        this.player2.powerstats.strength = (this.player2.powerstats.strength * 0.8) - (this.player1.powerstats.combat/10  );
      }
      
    }
    if (3 < this.num2 && this.num2 < 6) {
      if(this.player2.powerstats.durability > 0) {
        console.log('ok');
        this.player2.powerstats.durability = (this.player2.powerstats.durability - 9 ) - (this.player1.powerstats.combat/10  );
      } else {
        this.player2.powerstats.strength = (this.player2.powerstats.strength - 9 ) - (this.player1.powerstats.combat/10  );
      } }
    if (6 < this.num2 && this.num2 < 9) {
      if(this.player2.powerstats.durability > 0) {
        this.player2.powerstats.durability = (this.player2.powerstats.durability - 6 ) - (this.player1.powerstats.combat/10  );
        this.player1.powerstats.strength = (this.player1.powerstats.strength + 6 ) + (this.player1.powerstats.combat/10  );
     
      } else {
        this.player2.powerstats.strength = (this.player2.powerstats.strength - 6 ) - (this.player1.powerstats.combat/10  );
        this.player1.powerstats.strength = (this.player1.powerstats.strength + 6 ) + (this.player1.powerstats.combat/10  );
      }
    }
    if (9 < this.num2 && this.num2 < 10) {
      if(this.player2.powerstats.durability > 0) {
        this.player2.powerstats.durability = (this.player2.powerstats.durability * 0.8 - 6 ) - (this.player1.powerstats.combat/10  );
        this.player1.powerstats.strength = (this.player1.powerstats.strength + 6 ) + (this.player1.powerstats.combat/10  );
     
      } else {
        this.player2.powerstats.strength = (this.player2.powerstats.strength * 0.8 - 6 ) - (this.player1.powerstats.combat/10  );
        this.player1.powerstats.strength = (this.player1.powerstats.strength + 6 ) + (this.player1.powerstats.combat/10  );
      }
    }
    this.ditributeCards();
    this.turn = 1;
    
  }

  spellMagic() {
    this.num3 = Math.random() * 9.99;
    console.log(this.num3);
    this.player1.cards[3] = {}; 
    if (0 <= this.num3 && this.num3 < 3) {
      this.player1.cards[3].text =' + 20 % intelligence and - 20% for other player';
      // document.getElementById("placecardP1C4").innerHTML = "+ 20% Armor";
    }
    if (3 < this.num3 && this.num3 < 6) {
      this.player1.cards[3].text =' + 9 intelligence and - 6 health for other player';
      // document.getElementById("placecardP1C4").innerHTML = "+ 9 Armor ";
    }
    if (6 < this.num3 && this.num3 < 9) {
      this.player1.cards[3].text =' + 6 health';
      // document.getElementById("placecardP1C4").innerHTML = "+ 4 Armor and + 6 Life";
    }
    if (9 < this.num3 && this.num3 < 10) {
      this.player1.cards[3].text =' + 9 Armor and + 4 power fight';
      // document.getElementById("placecardP1C4").innerHTML = "+ 9 Armor et + 4 Attack Power";
    }
  }
  okMagic() {
    if (0 < this.num3 && this.num3 < 3) {
      this.player1.powerstats.intelligence = this.player1.powerstats.intelligence * 1.2 * ((this.player1.powerstats.intelligence/100) +0.5 );
      this.player2.powerstats.intelligence = this.player2.powerstats.intelligence * 0.8 - ((this.player1.powerstats.intelligence/10));
    }
    if (3 < this.num3 && this.num3 < 6) {
      this.player1.powerstats.intelligence = this.player1.powerstats.intelligence + 9 * ((this.player1.powerstats.intelligence/100) +0.5 );
      if(this.player2.powerstats.durability > 0) {
        this.player2.powerstats.durability = (this.player2.powerstats.durability - 6 ) - (this.player1.powerstats.intelligence/10  );
      } else {
        this.player2.powerstats.strength = (this.player2.powerstats.strength - 6 ) - (this.player1.powerstats.intelligence/10  );
      }
    }
    if (6 < this.num3 && this.num3 < 9) {
      this.player1.powerstats.strength = this.player1.powerstats.strength + 6 * 1.2 * ((this.player1.powerstats.intelligence/100) +0.5 );
      this.player1.powerstats.durability = this.player1.powerstats.durability + 4 * 1.2 * ((this.player1.powerstats.intelligence/100) +0.5 );
    }
    if (9 < this.num3 && this.num3 < 10) {
      this.player1.powerstats.durability = this.player1.powerstats.durability + 9 * 1.2 * ((this.player1.powerstats.intelligence/100) +0.5 );
      this.player1.powerstats.combat = this.player1.powerstats.combat + 4 * 1.2 * ((this.player1.powerstats.intelligence/100) +0.5 );
    }
    this.ditributeCards();
    this.turn = 1;
    
  }










  spellHealbis() {
    this.num = Math.random() * 9.99;
    console.log(this.num);
    this.player2.cards = [];
    this.player2.cards[0] = {}; 
    if (0 <= this.num && this.num < 3) {
      this.player2.cards[0].text ='+20% of health';
      // document.getElementById("placecardP2C1").innerHTML = "+ 20% de vie";
    }
    if (3 < this.num && this.num < 6) {
      this.player2.cards[0].text ='+9 of health';
      // document.getElementById("placecardP2C1").innerHTML = "+ 9 de vie";
    }
    if (6 < this.num && this.num < 9) {
      this.player2.cards[0].text ='+4 of health and +6 of Armor';
      // document.getElementById("placecardP2C1").innerHTML = "+ 4 de vie et + 6 d'armure";
    }
    if (9 < this.num && this.num < 10) {
      this.player2.cards[0].text ='+ 9 of health and 4 power fight';
      // document.getElementById("placecardP2C1").innerHTML = "+ 9 de vie et + 4 d'attaque";
    }
    
  }
  okHealbis() {
    if (0 < this.num && this.num < 3) {
      this.player2.powerstats.strength = this.player2.powerstats.strength * 1.2 * (this.player2.powerstats.intelligence/100 +0.5 );
    }
    if (3 < this.num && this.num < 6) {
      this.player2.powerstats.strength = this.player2.powerstats.strength + 9 * (this.player2.powerstats.intelligence/100 +0.5 );
    }
    if (6 < this.num && this.num < 9) {
      this.player2.powerstats.strength = this.player2.powerstats.strength + 4 * (this.player2.powerstats.intelligence/100 +0.5 );
      this.player2.powerstats.durability = this.player2.powerstats.durability + 6 * (this.player2.powerstats.intelligence/100 +0.5 );
    }
    if (9 < this.num && this.num < 10) {
      this.player2.powerstats.strength = this.player2.powerstats.strength + 9 * (this.player2.powerstats.intelligence/100 +0.5 );
      this.player2.powerstats.combat = this.player2.powerstats.combat + 4 * (this.player2.powerstats.intelligence/100 +0.5 );
    }
    this.armor2 = this.player2.powerstats.durability +'%';
    this.health2 = this.player2.powerstats.strength +'%';
    if(this.player2.powerstats.strength > 100){
      this.player2.powerstats.strength = 100;
    }
    if(this.player2.powerstats.durability > 100){
      this.player2.powerstats.durability = 100;
    }
    this.ditributeCards();
    this.turn = 0;
  }

  spellDefbis() {
    this.num1 = Math.random() * 9.99;
    console.log(this.num1);
    this.player2.cards[1] = {}; 
    if (0 <= this.num1 && this.num1 < 3) {
      this.player2.cards[1].text ='+ 20% of Armor';
      // document.getElementById("placecardP2C2").innerHTML = "+ 20% Armor";
    }
    if (3 < this.num1 && this.num1 < 6) {
      this.player2.cards[1].text ='+9 of Armor';
      // document.getElementById("placecardP2C2").innerHTML = "+ 9 Armor ";
    }
    if (6 < this.num1 && this.num1 < 9) {
      this.player2.cards[1].text ='+4 of Armor and  + 4 of health';
      // document.getElementById("placecardP2C2").innerHTML = "+ 4 Armor and + 6 Life";
    }
    if (9 < this.num1 && this.num1 < 10) {
      this.player2.cards[2].text ='+9 of Armor and  + 4 power fight';
      // document.getElementById("placecardP2C2").innerHTML = "+ 9 Armor et + 4 Attack Power";
    }
  }
  okDefbis() {
    if (0 < this.num1 && this.num1 < 3) {
      this.player2.powerstats.durability = this.player2.powerstats.durability * 1.2 * (this.player2.powerstats.power/100 +0.5 );
    }
    if (3 < this.num1 && this.num1 < 6) {
      this.player2.powerstats.durability = this.player2.powerstats.durability + 9 * (this.player2.powerstats.power/100 +0.5 );
    }
    if (6 < this.num1 && this.num1 < 9) {
      this.player2.powerstats.strength = this.player2.powerstats.strength + 6 * (this.player2.powerstats.power/100 +0.5 );;
      this.player2.powerstats.durability = this.player2.powerstats.durability + 4 * (this.player2.powerstats.power/100 +0.5 );
    }
    if (9 < this.num1 && this.num1 < 10) {
      this.player2.powerstats.durability = this.player2.powerstats.durability + 9 * (this.player2.powerstats.power/100 +0.5 );
      this.player2.powerstats.combat = this.player2.powerstats.combat + 4 * (this.player2.powerstats.power/100 +0.5 );;
    }
    this.armor2 = this.player2.powerstats.durability +'%';
    this.health2 = this.player2.powerstats.strength +'%';
    if(this.player2.powerstats.durability > 100){
      this.player2.powerstats.durability = 100;
    }
    if(this.player2.powerstats.strength > 100){
      this.player2.powerstats.strength = 100;
    }
    this.ditributeCards();
    this.turn = 0;
    
  }

  spellCACbis() {
    this.num2 = Math.random() * 9.99;
    console.log(this.num2);
    this.player2.cards[2] = {}; 
    if (0 <= this.num2 && this.num2 < 3) {
      this.player2.cards[2].text ='Attack 20%';
      // document.getElementById("placecardP1C3").innerHTML = "+ 20% Armor";
    }
    if (3 < this.num2 && this.num2 < 6) {
      this.player2.cards[2].text =' Attack 9 pv';
      // document.getElementById("placecardP1C3").innerHTML = "+ 9 Armor ";
    }
    if (6 < this.num2 && this.num2 < 9) {
      this.player2.cards[2].text =' Attack 6 pv and recup 6 heal';
      // document.getElementById("placecardP1C3").innerHTML = "+ 4 Armor and + 6 Life";
    }
    if (9 < this.num2 && this.num2 < 10) {
      this.player2.cards[2].text =' Attack 6 pv + 20% and recup 6 heal';
      // document.getElementById("placecardP1C3").innerHTML = "+ 9 Armor et + 4 Attack Power";
    }
  }
  okCACbis() {
    if (0 < this.num2 && this.num2 < 3) {
      if(this.player1.powerstats.durability > 0) {
        this.player1.powerstats.durability = (this.player1.powerstats.durability * 0.8) - (this.player2.powerstats.combat/10  );
      } else {
        this.player1.powerstats.strength = (this.player1.powerstats.strength * 0.8) - (this.player2.powerstats.combat/10  );
      }
      
    }
    if (3 < this.num2 && this.num2 < 6) {
      if(this.player1.powerstats.durability > 0) {
        this.player1.powerstats.durability = (this.player1.powerstats.durability - 9 ) - (this.player2.powerstats.combat/10  );
      } else {
        this.player1.powerstats.strength = (this.player1.powerstats.strength - 9 ) - (this.player2.powerstats.combat/10  );
      } }
    if (6 < this.num2 && this.num2 < 9) {
      if(this.player1.powerstats.durability > 0) {
        this.player1.powerstats.durability = (this.player1.powerstats.durability - 6 ) - (this.player2.powerstats.combat/10  );
        this.player2.powerstats.strength = (this.player2.powerstats.strength + 6 ) + (this.player2.powerstats.combat/10  );
     
      } else {
        this.player1.powerstats.strength = (this.player1.powerstats.strength - 6 ) - (this.player2.powerstats.combat/10  );
        this.player2.powerstats.strength = (this.player2.powerstats.strength + 6 ) + (this.player2.powerstats.combat/10  );
      }
    }
    if (9 < this.num2 && this.num2 < 10) {
      if(this.player1.powerstats.durability > 0) {
        this.player1.powerstats.durability = (this.player1.powerstats.durability * 0.8 - 6 ) - (this.player2.powerstats.combat/10  );
        this.player2.powerstats.strength = (this.player2.powerstats.strength + 6 ) + (this.player2.powerstats.combat/10  );
     
      } else {
        this.player1.powerstats.strength = (this.player1.powerstats.strength * 0.8 - 6 ) - (this.player2.powerstats.combat/10  );
        this.player2.powerstats.strength = (this.player2.powerstats.strength + 6 ) + (this.player2.powerstats.combat/10  );
      }
    }
    this.ditributeCards();
    this.turn = 0;
    
  }

  spellMagicbis() {
    this.num3 = Math.random() * 9.99;
    console.log(this.num3);
    this.player2.cards[3] = {}; 
    if (0 <= this.num3 && this.num3 < 3) {
      this.player2.cards[3].text =' + 20 % intelligence and - 20% for other player';
      // document.getElementById("placecardP1C4").innerHTML = "+ 20% Armor";
    }
    if (3 < this.num3 && this.num3 < 6) {
      this.player2.cards[3].text =' + 9 intelligence and - 6 health for other player';
      // document.getElementById("placecardP1C4").innerHTML = "+ 9 Armor ";
    }
    if (6 < this.num3 && this.num3 < 9) {
      this.player2.cards[3].text =' + 6 health';
      // document.getElementById("placecardP1C4").innerHTML = "+ 4 Armor and + 6 Life";
    }
    if (9 < this.num3 && this.num3 < 10) {
      this.player2.cards[3].text =' + 9 Armor and + 4 power fight';
      // document.getElementById("placecardP1C4").innerHTML = "+ 9 Armor et + 4 Attack Power";
    }
  }
  okMagicbis() {
    if (0 < this.num3 && this.num3 < 3) {
      this.player2.powerstats.durability = this.player2.powerstats.durability * 1.2;
    }
    if (3 < this.num3 && this.num3 < 6) {
      this.player2.powerstats.durability = this.player2.powerstats.durability + 9;
    }
    if (6 < this.num3 && this.num3 < 9) {
      this.player2.powerstats.strength = this.player2.powerstats.strength + 6;
      this.player2.powerstats.durability = this.player2.powerstats.durability + 4;
    }
    if (9 < this.num3 && this.num3 < 10) {
      this.player2.powerstats.durability = this.player2.powerstats.durability + 9;
      this.player2.powerstats.combat = this.player2.powerstats.combat + 4;
    }
    this.ditributeCards();
    this.turn = 0;
    
  }


}
