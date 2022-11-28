import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

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
  APIKEY = 'ec18a1adac82007bb96905f07d4df42c';
  lat: any;
  lon: any;
  weathertemp: any;
  cityname: any;
  weatherdetail: any;
  respuesta: any;

  constructor(private loadingCtrl: LoadingController, private httpClient: HttpClient, private geolocation: Geolocation) {}

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

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lon = resp.coords.longitude
     }).catch((error) => {
       console.log('Error al obtener la ubicacion', error);
     });
     this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.APIKEY}`).subscribe(results => {
      this.respuesta = results;
      this.cityname = this.respuesta.name;
      this.weathertemp = this.respuesta.main.temp;
      this.weatherdetail = this.respuesta.weather[0].description;
      console.log(this.respuesta);
     })
  }
}
