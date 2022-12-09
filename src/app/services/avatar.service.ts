import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, collectionData, doc, docData, Firestore, setDoc ,updateDoc} from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { base64 } from '@firebase/util';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private auth:Auth,
    private firestore:Firestore,
    private storage:Storage) { }

    getUserProfile(){
      const user = this.auth.currentUser;
      const userDocRef = doc(this.firestore,`profesor/${user.uid}`);
      return docData(userDocRef);
    }
    getUserProfile1(){
      const user = this.auth.currentUser;
      const userDocRef = doc(this.firestore,`alumno/${user.uid}`);
      return docData(userDocRef);
    }

    async addUsuario(usuario: Usuario){
      const user = this.auth.currentUser;
      try {
        if(usuario.perfil == 'profesor'){
          const userDocRef = doc(this.firestore,`profesor/${user.uid}`);
          await setDoc(userDocRef,{
            rut: usuario.rut,
            name: usuario.name,
            lastname: usuario.lastname,
            gender: usuario.gender,
            email: usuario.email,
            age: usuario.age,
            image: usuario.image,
            asignatura: usuario.asignatura,
            direccion: usuario.direccion,
            comuna: usuario.comuna,
            telefono: usuario.telefono,
            perfil: usuario.perfil
          });
        }
        else if(usuario.perfil == 'alumno'){
          const userDocRef = doc(this.firestore,`alumno/${user.uid}`);
          await setDoc(userDocRef,{
            rut: usuario.rut,
            name: usuario.name,
            lastname: usuario.lastname,
            gender: usuario.gender,
            email: usuario.email,
            age: usuario.age,
            image: usuario.image,
            asignatura: usuario.asignatura,
            direccion: usuario.direccion,
            comuna: usuario.comuna,
            telefono: usuario.telefono,
            perfil: usuario.perfil
          });
        }


        return true;
      } catch (error) {
        return false;
      }
    }
    getUser(){
      const user = this.auth.currentUser;
      return user.uid;
    }

    
    getEmail(){
      const user = this.auth.currentUser;
      return user.email;
    }


    async Getavatar(cameraFile:Photo){
      const user = this.auth.currentUser;
      const path = `uploads/${user.uid}/profile.png`;
      const storageRef = ref(this.storage,path);
        await uploadString(storageRef,cameraFile.base64String || '', 'base64');

        const imageUrl = await Promise.resolve(getDownloadURL(storageRef));
        const imagen: string =imageUrl;
        return imagen;
          
  
  }

  updateUsuario(usuario: Usuario){
    const usuarioRef = doc(this.firestore, `users/${this.auth.currentUser.uid}`);
    return updateDoc(usuarioRef, 
      {
       name: usuario.name,
       lastname: usuario.lastname,
       gender: usuario.gender,
       email: usuario.email,
       age: usuario.age,
       image: usuario.image,
      });
  }



  getUsuarioById(): Observable<Usuario>{
    const usuarioDocRef = doc(this.firestore, `profesor/${this.auth.currentUser.uid}`);
    return docData(usuarioDocRef) as Observable<Usuario>;
  }

  getUsuarioById1(): Observable<Usuario>{
    const usuarioDocRef = doc(this.firestore, `alumno/${this.auth.currentUser.uid}`);
    return docData(usuarioDocRef) as Observable<Usuario>;
  }

}
