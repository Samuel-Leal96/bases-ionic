import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage{

  favorito: Boolean = false;

  constructor() { }

  onClick(){
    this.favorito = !this.favorito;
  }

}
