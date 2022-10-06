import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detbastian',
  templateUrl: './detbastian.page.html',
  styleUrls: ['./detbastian.page.scss'],
})
export class DetbastianPage implements OnInit {

  pageTitle = 'About Bastián';
  isNotHome = true;

  constructor() { }

  ngOnInit() {
  }

}
