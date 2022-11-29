import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MindicadorService } from 'src/app/services/mindicador/mindicador.service';

@Component({
  selector: 'app-coversor',
  templateUrl: './coversor.page.html',
  styleUrls: ['./coversor.page.scss'],
})
export class CoversorPage implements OnInit {

  valorMoneda:any= [];
  pageTitle = 'coversor';
  isNotHome = true;
  loading : HTMLIonLoadingElement;
  constructor(private activatedRoute: ActivatedRoute, private mindicadorService:MindicadorService, ) {
  }

  ngOnInit():void {
    const moneda1 = document.getElementById('uno')
    this.cargarValorMonedas();
  }

    cargarValorMonedas(){
      this.mindicadorService.obtenerValorPesos()
      .then(respuesta => {
        this.valorMoneda = [respuesta.uf,respuesta.dolar,respuesta.euro];
        console.log(this.valorMoneda);
      },
      (err) => {
        console.log(err);
      });
    }

  }
