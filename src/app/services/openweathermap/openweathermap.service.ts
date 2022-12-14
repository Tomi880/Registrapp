import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  APIKEY = 'ec18a1adac82007bb96905f07d4df42c';
  lat: any;
  lon: any;
  respuesta: any;

  constructor(private httpClient: HttpClient, private geolocation: Geolocation) {
    }
    
    getLocation(){
      this.geolocation.getCurrentPosition().then((resp) => {
        this.lat = resp.coords.latitude
        this.lon = resp.coords.longitude
       }).catch((error) => {
         console.log('Error al obtener la ubicacion', error);
       });
  }
  getGeolocation(): Promise<any> {
    return new Promise((resolve,reject) =>{
       this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.APIKEY}&units=metric`).subscribe(results => {
        console.log(this.respuesta);
        resolve(results);
       },
       (err) => {
        reject(err);
       })

    })
  }
}
