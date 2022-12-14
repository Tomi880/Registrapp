import { Component } from '@angular/core';
import { AvatarService } from './services/avatar.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  rol:string;
  

  constructor(private avatarService: AvatarService) {}


  
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
  
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Conversor', url: '/coversor', icon: 'cash' },
    { title: 'About', url: '/about', icon: 'help' },

  ];
  
  
}
