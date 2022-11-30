import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore:Firestore) { }

  getUsuarios(): Observable<Usuario[]>{
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, {idField:'uid'}) as Observable<Usuario[]>;
  }

  getUsuarioById(uid:string): Observable<Usuario>{
    const usuarioDocRef = doc(this.firestore, `usuarios/${uid}`);
    return docData(usuarioDocRef, { idField:'uid' }) as Observable<Usuario>;
  }

  addUsuario(usuario: Usuario){
    const usuariosRef = collection(this.firestore, 'usuarios');
    return addDoc(usuariosRef, usuario);
  }

  updateUsuario(usuario: Usuario){
    const usuarioRef = doc(this.firestore, `usuarios/${usuario.uid}`);
    return updateDoc(usuarioRef, 
      {
       name: usuario.name,
       lastname: usuario.lastname,
       gender: usuario.gender,
       email: usuario.email,
       age: usuario.age,
       image: usuario.image 
      });
  }

  deleteUsuario(usuario:Usuario){
    const usuarioRef = doc(this.firestore,`usuarios/${usuario.uid}`);
    return deleteDoc(usuarioRef);
  }

}
