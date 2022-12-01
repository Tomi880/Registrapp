import { StringLike } from "@firebase/util";

export interface Usuario{
    uid:string;
    name:string;
    lastname:string;
    gender:string;
    email:string;
    age:number;
    image:string;
    perfil:string;
}

export interface User{
    id?:string;
    name:string;
    lastname:string;
    gender:string;
    email:string;
    age:number;
    materia: string;
    telefono: number;
    direccion: string;
    comuna: String;
    image:string;
}