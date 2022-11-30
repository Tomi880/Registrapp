import { Component, OnInit } from '@angular/core';
import { MindicadorService } from 'src/app/services/mindicador/mindicador.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {

  valorMonedaDolar: any;
  valorMonedaEuro: any;
  valorMonedaUF: any;
  pageTitle = 'conversor';
  isNotHome = true;
  results: any;
  resultado: number;
  valor: number;
  alerta: any;
  moneda: string;
  total: any;
  nombre: any;
  resultado1: any;

  constructor(private mindicadorService:MindicadorService, private alertController: AlertController) {

  }

  ngOnInit():void {
    this.cargarValorMonedas();
  }

  async presentAlert() {
    this.alerta = await this.alertController.create({
      header: 'Error',
      subHeader: 'A ocurrido un problema',
      message: 'debe elegir una opcion',
      buttons: ['OK'],
    });

    await this.alerta.present();
  }

    cargarValorMonedas(){
      this.mindicadorService.obtenerValorPesos()
      .then(results => {
        this.results = results;
        this.valorMonedaDolar = this.results.dolar.valor;
        this.valorMonedaEuro = this.results.euro.valor;
        this.valorMonedaUF = this.results.uf.valor;
        console.log(this.results); 
      },
      (err) => {
        console.log(err);
      });
    }

    obtenerValorMoneda(moneda){
      if(moneda == "dolares"){
        this.resultado = this.valor / this.valorMonedaDolar
        this.resultado1 = this.resultado.toFixed(2)
      }
      else if(moneda == "euros"){
        this.resultado = Math.round(this.valor / this.valorMonedaEuro)
        this.resultado1 = this.resultado.toFixed(2)
      }
      else if(moneda == "ufs"){
        this.resultado = Math.round(this.valor / this.valorMonedaUF)
        this.resultado1 = this.resultado.toFixed(2)
      }
      else {
        this.presentAlert();
      }
    }
  }