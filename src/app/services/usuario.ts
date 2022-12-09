import { StringLike } from "@firebase/util";

export interface Usuario{
    uid:string;
    rut:string;
    name:string;
    lastname:string;
    gender:string;
    email:string;
    age:number;
    image:string;
    asignatura: string;
    direccion: string;
    comuna: string;
    telefono: number;
    perfil:string;
}

export interface Asistencia{
    id?:string;
    rut:string;
    name:string;
    lastname:string;
    fecha:string;
}

