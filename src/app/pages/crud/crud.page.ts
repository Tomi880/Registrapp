import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { User } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModalCrudPage } from '../modal-crud/modal-crud.page';

@Component({
  selector: 'app-crud',
  templateUrl: 'crud.page.html',
  styleUrls: ['crud.page.scss'],
})
export class CrudPage {
  pageTitle = 'crud';
  isNotHome = true;
  usuarios : User[] = [];

  constructor(private usuarioService:UsuarioService, private modalCtrl:ModalController, private alertCtrl:AlertController,
    private toastCtrl:ToastController) {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(respuesta => {
      console.log(respuesta);
      this.usuarios = respuesta;
    });
  }

  async openDetailUsuario(usuario){
    const modal = await this.modalCtrl.create({
      component: ModalCrudPage,
      componentProps: {id: usuario.uid },
      breakpoints: [0,0.5,0.8,1],
      initialBreakpoint:1
    });
    modal.present();
  }

  async addUsuario(){
    const alert = await this.alertCtrl.create({
      header:'Add usuario',
      inputs:[
        {
          name:'name',
          type:'text',
          placeholder:'Name',
        },
        {
          name:'lastname',
          type:'text',
          placeholder:'Lastname',
        },
        {
          name:'gender',
          type:'text',
          placeholder:'Gender',
        },
        {
          name:'age',
          type:'number',
          placeholder:'Age',
        },
        {
          name:'email',
          type:'email',
          placeholder:'correo@correo.com',
        },
        {
          name:'materia',
          type:'text',
          placeholder:'materia'
        },
        {
          name:'telefono',
          type:'number',
          placeholder:'telefono'
        },
        {
          name:'direccion',
          type:'text',
          placeholder:'direccion'
        },
        {
          name:'comuna',
          type:'text',
          placeholder:'comuna'
        },
        {
          name:'image',
          type:'url',
          placeholder:'link image',
          
        }
       ],
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Save',
          role:'confirm',
          handler:(data) => {
            this.usuarioService.addUsuario(data);
            this.toastPresent('Usuario added!!!');
          }
        }
      ]
    });
    alert.present();
  }

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000
    });
    toast.present();
  }

  
}
