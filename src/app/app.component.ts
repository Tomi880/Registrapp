import { Component } from '@angular/core';
import { AvatarService } from './services/avatar.service';
import { Usuario } from './services/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuario: Usuario = null;
  rol :string;
  

  constructor(private avatarService: AvatarService) {}
  

  getUsuario(){
    this.avatarService.getUsuarioById().subscribe(respuesta => {
      this.usuario = respuesta;
      this.rol = respuesta.perfil;
      console.log(this.rol);
    });
    
  }
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Conversor', url: '/coversor', icon: 'paper-plane' },
    { title: 'About', url: '/about', icon: 'help' },
    { title: 'Perfil', url: '/perfil', icon: 'contact' }
  ];
  
  
}
