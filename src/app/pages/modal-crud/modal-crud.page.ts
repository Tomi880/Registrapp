import { Component, OnInit, Input } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modal-crud',
  templateUrl: './modal-crud.page.html',
  styleUrls: ['./modal-crud.page.scss'],
})
export class ModalCrudPage implements OnInit {

  @Input() id :string;
  usuario: Usuario = null;
  pageTitle: string = '';

  constructor(private usuarioService:UsuarioService,private toastCtrl:ToastController,private modalCtrl:ModalController) {
    
   }

  ngOnInit() {
    this.getUsuario();
    console.log(this.getUsuario());
  }

  getUsuario(){
    this.usuarioService.getUsuarioById(this.id).subscribe(respuesta => {
      this.usuario = respuesta;
    });
  }

  async updateUsuario(){
    this.usuarioService.updateUsuario(this.usuario);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Usuario actualizado',
      duration:1000,
    });
    toast.present();
  }

  async deleteUsuario(){
    this.usuarioService.deleteUsuario(this.usuario);
    this.modalCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message:'Usuario eliminado',
      duration:1000,
    })
    toast.present();
  }

  async uploadAvatar(){
    const avatar = await Camera.getPhoto({
      quality:90,
      allowEditing:false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera //Photos o Prompt
    });
      const result = await Promise.resolve(this.usuarioService.Getavatar(avatar));
      this.usuario.image = result;
      console.log(result);
    }
}
