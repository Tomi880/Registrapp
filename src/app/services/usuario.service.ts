import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Usuario,Asistencia} from './usuario';
import { Observable } from 'rxjs';
import { Photo } from '@capacitor/camera';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore:Firestore,private storage:Storage,private auth:Auth) { }

  getUsuarios(): Observable<Usuario[]>{
    const usuariosRef = collection(this.firestore, 'alumno');
    return collectionData(usuariosRef, {idField:'uid'}) as Observable<Usuario[]>;
  }

  getUsuarioById(id:string): Observable<Usuario>{
    const usuarioDocRef = doc(this.firestore, `alumno/${id}`);
    return docData(usuarioDocRef, { idField:'uid' }) as Observable<Usuario>;
  }

  addUsuario(usuario: Usuario){
    const usuariosRef = collection(this.firestore, 'alumno');
    return addDoc(usuariosRef, usuario);
  }

  updateUsuario(usuario: Usuario){
    const usuarioRef = doc(this.firestore, `alumno/${usuario.uid}`);
    return updateDoc(usuarioRef, 
      {
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

  deleteUsuario(usuario:Usuario){
    const usuarioRef = doc(this.firestore,`alumno/${usuario.uid}`);
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

getAsistencias(): Observable<Asistencia[]>{
  const usuariosRef = collection(this.firestore, 'asistencia');
  return collectionData(usuariosRef, {idField:'id'}) as Observable<Asistencia[]>;
}

updateUsuario1(usuario: Usuario){
  const user = this.auth.currentUser
  const usuarioRef = doc(this.firestore, `alumno/${user.uid}`);
  return updateDoc(usuarioRef, 
    {
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

}
