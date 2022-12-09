import { Component } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ModalCrudPage } from '../modal-crud/modal-crud.page';

@Component({
  selector: 'app-crud',
  templateUrl: 'crud.page.html',
  styleUrls: ['crud.page.scss'],
})
export class CrudPage {
  pageTitle = 'crud Alumnos';
  isNotHome = true;
  usuarios : Usuario[] = [];

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

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000
    });
    toast.present();
  }

  
}
