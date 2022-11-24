import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  APIKEY = 'ec18a1adac82007bb96905f07d4df42c';
  lat: any;
  url: string = '';
  lon: any;
  weathertemp: any;
  cityname: any;
  weatherdetail: any;

  constructor(private httpClient: HttpClient, private geolocation: Geolocation) {
    
    }
    

    getGeolocation(){
      this.geolocation.getCurrentPosition().then((resp) => {
        this.lat = resp.coords.latitude
        this.lon = resp.coords.longitude
       }).catch((error) => {
         console.log('Error al obtener la ubicacion', error);
       });
       this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.APIKEY}`).subscribe(results => {
        this.cityname = results['name']
        this.weathertemp = results['temp']
        this.weatherdetail = results['description']
       })
    }
}
