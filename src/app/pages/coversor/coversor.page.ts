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

    obtenerValorMoneda(){
      if("dolar"){
        this.resultado = this.valor / this.valorMonedaDolar
        console.log(this.resultado);
      }
      else if("euro"){
        this.resultado = this.valor / this.valorMonedaEuro
        console.log(this.resultado);
      }
      else if("uf"){
        this.resultado = this.valor / this.valorMonedaUF
        console.log(this.resultado);
      }
      else {
        this.presentAlert();
      }
    }

  }
