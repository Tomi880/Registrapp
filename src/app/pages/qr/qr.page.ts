import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  pageTitle = 'qr';
  isNotHome = true;
  loading : HTMLIonLoadingElement;
  constructor() { }

  ngOnInit() {
  }

}
