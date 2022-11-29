import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { OpenweathermapService } from 'src/app/services/openweathermap/openweathermap.service';

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

  constructor(private loadingCtrl: LoadingController, private httpClient: HttpClient, private geolocation: Geolocation, private openweathermapService: OpenweathermapService) {}

  ngOnInit(): void {
    this.cargarLoading('Cargando');
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

}
