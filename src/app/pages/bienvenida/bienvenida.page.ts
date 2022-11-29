import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/services/usuario';
import { AvatarService } from 'src/app/services/avatar.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  rol: string;
  pageTitle = 'Bienvenido usuario.';
  isNotHome = false;
  loading : HTMLIonLoadingElement;
  usuario : Usuario= {
    uid :'',
    name :'',
    lastname:'',
    age:0,
    gender:'',
    email:'',
    image:'',
    perfil:''
  };
  
  constructor(private modalCtrl:ModalController, private alertCtrl:AlertController,
    private toastCtrl:ToastController,private avatarService:AvatarService) {
   
  }

  ngOnInit() {
    this.getUsuario();

  }

  getUsuario(){
    this.avatarService.getUsuarioById().subscribe(respuesta => {
      this.usuario = respuesta;
    });
    
  }

}
