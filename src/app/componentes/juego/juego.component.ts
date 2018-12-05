import { Component, OnInit } from '@angular/core';
import { Identifiers } from '@angular/compiler';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  Piezas: any[] = [];
  idPieza: string;
  moverPeon: number;
  mov: string;

  constructor() { }

  ngOnInit() {
    this.Piezas[0] = 'J1P1';
    this.Piezas[1] = 'J1P2';
    this.Piezas[2] = 'J1P3';
    this.Piezas[3] = 'J1P4';
    this.Piezas[4] = 'J1P5';
    this.Piezas[5] = 'J1P6';
    this.Piezas[6] = 'J1P7';
    this.Piezas[7] = 'J1P8';
    this.Piezas[8] = 'J1T1';
    this.Piezas[9] = 'J1C1';
    this.Piezas[10] = 'J1A1';
    this.Piezas[11] = 'J1K1';
    this.Piezas[12] = 'J1Q1';
    this.Piezas[13] = 'J1A2';
    this.Piezas[14] = 'J1C2';
    this.Piezas[15] = 'J1T2';
  }

  ver(){
    alert(this.idPieza)
    alert(this.mov)
  }

}
