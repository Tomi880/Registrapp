import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { User } from './usuario';
import { Observable } from 'rxjs';
import { Photo } from '@capacitor/camera';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore:Firestore,private storage:Storage,private auth:Auth) { }

  getUsuarios(): Observable<User[]>{
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, {idField:'uid'}) as Observable<User[]>;
  }

  getUsuarioById(id:string): Observable<User>{
    const usuarioDocRef = doc(this.firestore, `usuarios/${id}`);
    return docData(usuarioDocRef, { idField:'id' }) as Observable<User>;
  }

  addUsuario(usuario: User){
    const usuariosRef = collection(this.firestore, 'usuarios');
    return addDoc(usuariosRef, usuario);
  }

  updateUsuario(usuario: User){
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.id}`);
    return updateDoc(usuarioRef, 
      {
       name: usuario.name,
       lastname: usuario.lastname,
       gender: usuario.gender,
       email: usuario.email,
       age: usuario.age,
       materia: usuario.materia,
       telefono: usuario.telefono,
       direccion: usuario.direccion,
       comuna: usuario.comuna,
       image: usuario.image 
      });
  }

  deleteUsuario(usuario:User){
    const usuarioRef = doc(this.firestore,`usuarios/${usuario.id}`);
    return deleteDoc(usuarioRef);
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

}
