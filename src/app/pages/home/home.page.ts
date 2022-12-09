import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { OpenweathermapService } from 'src/app/services/openweathermap/openweathermap.service';
import { Usuario } from 'src/app/services/usuario';
import { AvatarService } from 'src/app/services/avatar.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  todayDate = new Date()
  pageTitle = 'home';
  isNotHome = true;
  loading : HTMLIonLoadingElement;
  weathertemp: any;
  cityname: any;
  weatherdetail: any;
  respuesta: any;
  usuario: Usuario = null;
  rol : string;

  constructor(private loadingCtrl: LoadingController, private openweathermapService: OpenweathermapService, private avatarService:AvatarService, private router:Router) {}

  ngOnInit(){
    this.cargarLoading('Cargando');
    this.openweathermapService.getLocation();
    this.getRol();
    this.getRol1();
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

  obtenerClima(){
    this.openweathermapService.getGeolocation().then(results => {
      this.respuesta = results;
      this.cityname = this.respuesta.name;
      this.weathertemp = this.respuesta.main.temp;
      this.weatherdetail = this.respuesta.weather[0].description;
    })
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
  
  getRol1(){
    this.avatarService.getUsuarioById1().subscribe(respuesta => {
      this.rol = respuesta.perfil;
      console.log(this.rol);
    });
  }

  GenerarQR(){
    this.router.navigate(['/qr']);
  }

  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera //Photos o Prompt
    });
    }



}
