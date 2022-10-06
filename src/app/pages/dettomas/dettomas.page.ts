import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettomas',
  templateUrl: './dettomas.page.html',
  styleUrls: ['./dettomas.page.scss'],
})
export class DettomasPage implements OnInit {

  pageTitle = 'About Tomas';
  isNotHome = true;

  constructor() { }

  ngOnInit() {
  }

}
