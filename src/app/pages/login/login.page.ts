import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationDirection, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle = 'Login';

  //Modelo
  user: any = {
    username : '',
    password : ''
  }


  field : string = '';

  constructor(private toastCtrl: ToastController, private route : Router) { }

  ngOnInit() {
  }

  ingresar(){
    if(this.validateModel(this.user)){
      this.presentToast(this.field);
      
    }
    else{
      this.presentToast("Falta: " + this.field);
    }
  }

  validateModel (model: any){
    for(var[key,value] of Object.entries(model)){
      if (value == ''){
        this.field = key;
        return false;
      }
    }
    if (value == 'admin'){
      this.field = 'Bienvenido admin';
      this.route.navigate(['/home']);
      return true;
    }
    else{
      this.field = 'Bienvenido Usuario';
      this.route.navigate(['/home']);
      return true;
    }
    
  }


  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration?duration:2000
    });
    toast.present();
  }

}
