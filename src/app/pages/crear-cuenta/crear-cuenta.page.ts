import { Component, OnInit,Input } from '@angular/core';
import { Usuario } from 'src/app/services/usuario';
import { AvatarService } from 'src/app/services/avatar.service';
import { AlertController, ModalController, ToastController,LoadingController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  @Input() id :string;
  usuario: Usuario = {
    uid :'',
    rut: '' ,
    name: '',
    lastname: '',
    gender: '',
    email: this.avatarService.getEmail(),
    age: 0,
    image:'',
    asignatura:'',
    direccion:'',
    comuna:'',
    telefono:0,
    perfil: ''
  };
  pageTitle = 'crud';
  isNotHome = false;
  profile:any=null;


  constructor(private avatarService:AvatarService,private modalCtrl:ModalController, private alertCtrl:AlertController,
    private toastCtrl:ToastController, private loadingCtrl:LoadingController,private router:Router) { }

  ngOnInit() {
  }

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000
    });
    toast.present();
  }

  async addUsuario(){
    this.avatarService.addUsuario(this.usuario);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Usuario Creado',
      duration:1000,
    });
    toast.present();
    this.router.navigateByUrl('/bienvenida',{replaceUrl:true});
  }

  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera //Photos o Prompt
    });
      const result = await Promise.resolve(this.avatarService.Getavatar(avatar));
      this.usuario.image = result;
      console.log(result);
    }
    
    loadProfile(){
      this.avatarService.getUserProfile().subscribe(respuesta => {
        this.profile = respuesta
      });
    }

}
