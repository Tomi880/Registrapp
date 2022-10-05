import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationDirection, IonImg, ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

  pageTitle = 'Login';
  isNotHome = false;
  loading : HTMLIonLoadingElement;

  //Modelo
  user: any = {
    username : '',
    password : ''
  }


  field : string = '';

  constructor(private toastCtrl: ToastController, private route : Router ,private loadingCtrl: LoadingController) { }


  ngOnInit(): void{
    this.cargarLoading('Bienvenidos a Registrap');
  }

  cargarLoading(message: string){
    this.presentLoading(message);
    setTimeout(() => {
      this.loading.dismiss();
    },2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();

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
