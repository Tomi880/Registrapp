import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationDirection, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  pageTitle = 'About';
  isNotHome = true;

  constructor(private route : Router) { }

  ngOnInit() {
  }
  
  DetBastian(){
    this.route.navigate(['/detbastian']);
  }
  
  DetGonzalo(){
    this.route.navigate(['/detgonzalo']);
  }

  DetTomas(){
    this.route.navigate(['/dettomas']);
  }
  
  }

