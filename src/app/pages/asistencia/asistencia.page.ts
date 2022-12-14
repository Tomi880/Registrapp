import { Component, Input, OnInit } from '@angular/core';
import { Usuario,Asistencia} from 'src/app/services/usuario';
import { AvatarService } from 'src/app/services/avatar.service';
import { ModalController,ToastController  } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  pageTitle = 'Asitencia';
  isNotHome = true;

  usuario: Usuario = null;

  name: string;
  lastname:string;
  rut:string;

  asistencia : Asistencia = {
    rut:this.getRut(),
    name: this.getName(),
    lastname: this.getLastname(),
    fecha: new Date().toString()
  }

  constructor(private avatarService:AvatarService,private modalCtrl:ModalController,
    private toastCtrl:ToastController,private router:Router) { }

  ngOnInit() {
    this.getUsuario1();

  }
  

  getUsuario1(){
    this.avatarService.getUsuarioById1().subscribe(respuesta => {
      this.usuario = respuesta;
    });
  }
  getName(){
    this.avatarService.getUsuarioById1().subscribe(respuesta => {
      this.name = respuesta.name;
    });
    return this.name
  }
  getLastname(){
    this.avatarService.getUsuarioById1().subscribe(respuesta => {
      this.lastname = respuesta.lastname;
      return this.lastname
    });
    return this.lastname
  }
  getRut(){
    this.avatarService.getUsuarioById1().subscribe(respuesta => {
      this.rut = respuesta.rut;
      return this.rut
    });
    return this.rut
  }

  


  async addAsistt(){
    this.avatarService.addAsistencia(this.asistencia,this.usuario);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Asistencia confirmada',
      duration:1000,
    });
    toast.present();
    this.router.navigateByUrl('/home',{replaceUrl:true});
  }

  
  
  

}
