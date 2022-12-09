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
  
  constructor(private modalCtrl:ModalController, private alertCtrl:AlertController,
    private toastCtrl:ToastController,private avatarService:AvatarService) {
   
  }

  ngOnInit() {
    this.getUsuario();
    this.getUsuario1();
    this.getRol;
  }

  getUsuario(){
    this.avatarService.getUsuarioById().subscribe(respuesta => {
      this.usuario = respuesta;
    });
    
  }

  
  getUsuario1(){
    this.avatarService.getUsuarioById1().subscribe(respuesta => {
      this.usuario = respuesta;
    });   
  }


  getRol(){
    this.avatarService.getUsuarioById().subscribe(respuesta => {
      this.rol = respuesta.perfil;
      console.log(this.rol);
    });
  }

}
