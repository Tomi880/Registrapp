import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida-a',
  templateUrl: './bienvenida-a.page.html',
  styleUrls: ['./bienvenida-a.page.scss'],
})
export class BienvenidaAPage implements OnInit {

  pageTitle = 'Bienvenido Administrador.';
  isNotHome = false;
  loading : HTMLIonLoadingElement;

  constructor() { }

  ngOnInit() {
  }

}
