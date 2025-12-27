import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {


  @ViewChild('win') winRef!:ElementRef;

boxes: string[] = ["", "", "", "", "", "", "", "", ""];
  turn0: boolean = true; // true → 0, false → X
  winner: string = "";
  showMsg: boolean = false;

  winPatterns: number[][] = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  onclick(i: number) {
    if (this.boxes[i] !== "" || this.winner !== "") return;

    this.boxes[i] = this.turn0 ? "0" : "X";
    this.turn0 = !this.turn0;


    this.checkWinner();
  }

  checkWinner() {
    for (let pattern of this.winPatterns) {
      let pos1 = this.boxes[pattern[0]];
      let pos2 = this.boxes[pattern[1]];
      let pos3 = this.boxes[pattern[2]];

      if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
        this.winner = pos1;
        setTimeout(()=>{
          this.showMsg = true;

          setTimeout(()=>{
            if(this.winRef){
            this.winRef?.nativeElement.scrollIntoView({
              behavior:'smooth',
              block:'center'
            });
          }
          },100);

        },500);
        return;
      }
    }
  }

  resetGame() {
    this.boxes = ["", "", "", "", "", "", "", "", ""];
    this.turn0 = true;
    this.winner = "";
    this.showMsg = false;
  }


}











































































































































































































































































