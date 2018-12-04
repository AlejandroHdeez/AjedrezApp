import { Component, OnInit } from '@angular/core';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  peon: number = 1;
  moverPeon: number;

  constructor() { }

  ngOnInit() {
  }

  Movimiento(){
    this.moverPeon = this.peon
    this.peon=null;
  }

}
