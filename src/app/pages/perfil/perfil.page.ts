import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera/dist/esm/definitions';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { Usuario } from 'src/app/services/usuario';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage  implements OnInit{

  pageTitle = 'perfil';
  isNotHome = true ;
  loading : HTMLIonLoadingElement;


  profile:any=null;
  usuario: Usuario = null;
  @Input() id :string;
  modalCtrl: any;

  constructor(private authService:AuthService,
    private avatarService:AvatarService,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController,
    private toastCtrl:ToastController,
    private auth:Auth,
    private router:Router) {
      this.loadProfile();
    }

    ngOnInit() {
    this.getUsuario();
    }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }

  loadProfile(){
    this.avatarService.getUserProfile().subscribe(respuesta => {
      this.profile = respuesta
    });
  }


  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000,
    });
    await toast.present();
  }

  async alertPresent(header:string,message:string){
    const alert = await this.alertCtrl.create({
      header:header,
      message:message,
      buttons:['OK']
    });
    await alert.present();
  }

  getUsuario(){
    this.avatarService.getUsuarioById().subscribe(respuesta => {
      this.usuario = respuesta;
    });
  }
  async updateUsuario(){
    this.avatarService.updateUsuario(this.usuario);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Usuario actualizado',
      duration:1000,
    });
    toast.present();
  }


}
