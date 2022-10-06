import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  pageTitle = 'Bienvenido usuario.';
  isNotHome = false;
  loading : HTMLIonLoadingElement;

  constructor() { }

  ngOnInit() {
  }

}
