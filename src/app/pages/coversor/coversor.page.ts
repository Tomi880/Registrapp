import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  pageTitle = 'coversor';
  isNotHome = true;
  results: any;
  resultado: any;
  valor: any;
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
        this.valor = document.getElementById("valor")
        this.resultado = 0;
        this.results = results;
        this.valorMonedaDolar = this.results.dolar.valor;
        this.valorMonedaEuro = this.results.euro.valor;
        this.valorMonedaUF = this.results.uf.valor;
        console.log(this.results); 
        if (document.getElementById("valor"))
        if (document.getElementById("dolar")){
          this.resultado = this.valor / this.valorMonedaDolar
        }
        else if (document.getElementById("euro")){
          this.resultado = this.valor / this.valorMonedaEuro
        }
        else if (document.getElementById("uf")){
          this.resultado = this.valor / this.valorMonedaUF
        }
        else {
          this.alerta;
        }
      },
      (err) => {
        console.log(err);
      });
    }
    
    obtenerValorMoneda(){
      this.valor = document.getElementById("valor")
      this.resultado = 0;
      this.valorMonedaDolar = this.results.dolar.valor;
      this.valorMonedaEuro = this.results.euro.valor;
      this.valorMonedaUF = this.results.uf.valor;
      if (document.getElementById("dolar")){
        this.resultado = this.valor / this.valorMonedaDolar
      }
      else if (document.getElementById("euro")){
        this.resultado = this.valor / this.valorMonedaEuro
      }
      else {
        this.resultado = this.valor / this.valorMonedaUF
      }
    }

  }
