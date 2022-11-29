import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

  pageTitle = 'Login';
  isNotHome = false;
  loading : HTMLIonLoadingElement;
  
  credentials!: FormGroup;

  constructor(
    private toastCtrl: ToastController, 
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router) { }


  ngOnInit(): void{
    this.cargarLoading('Bienvenidos a Registrap')
    this.crearFormulario();
  }

  cargarLoading(message: string){
    this.presentLoading(message);
    setTimeout(() => {
      this.loading.dismiss();
    },2000);
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
    message: ` <ion-avatar><img src="assets/Negro con Dorado Círculo Inmobiliaria Logo.svg" class="img-align"</ion-avatar> `,
    cssClass:`loading-wrapper img-align`
    });

    await this.loading.present();

  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: duration?duration:2000
    });
    toast.present();
  }


  crearFormulario(){
    this.credentials = this.formBuilder.group({
      email: ['' , [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email(){
    return this.credentials?.get('email');
  }

  get password(){
    return this.credentials?.get('password');
  }

  async login(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.authService.login(this.credentials.value.email,this.credentials.value.password);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/bienvenida',{replaceUrl:true});
      
    }
    else{
      this.alertPresent('Login failed','Please try again!');
    }
  }

  async register(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.authService.register(this.credentials.value.email,this.credentials.value.password);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/crear-cuenta',{replaceUrl:true});
    }
    else{
      this.alertPresent('Register failed','Please try again!');
    }
  }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK']
    });
    await alert.present();
  }

}
