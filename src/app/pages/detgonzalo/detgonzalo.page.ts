import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detgonzalo',
  templateUrl: './detgonzalo.page.html',
  styleUrls: ['./detgonzalo.page.scss'],
})
export class DetgonzaloPage implements OnInit {

  pageTitle = 'About Gonzalo';
  isNotHome = true;

  constructor() { }

  ngOnInit() {
  }

}
