import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Asistencia } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ver-asistencias',
  templateUrl: './ver-asistencias.page.html',
  styleUrls: ['./ver-asistencias.page.scss'],
})
export class VerAsistenciasPage {

  pageTitle = 'Asistencias';
  isNotHome = true;
  asistencia : Asistencia[] = [];

  constructor(private usuarioService:UsuarioService, private modalCtrl:ModalController, private alertCtrl:AlertController,
    private toastCtrl:ToastController) {
    this.getAsistencias();
  }

  getAsistencias(){
    this.usuarioService.getAsistencias().subscribe(respuesta => {
      console.log(respuesta);
      this.asistencia = respuesta;
    });
  }

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:1000
    });
    toast.present();
  }
}
