import { Injectable } from '@angular/core';

export const editor = 1
export const avaliador = 2


@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  usuarios: {id:number, nome: string, login:string, senha:string, perfil:number}[]=[];
  logado: any;
  index: number;
 

  constructor() {
    this.logado =null;
    this.index = 0;

    this.usuarios=[
      {id:1, nome:'Diego', login:'Diego', senha:'123', perfil: editor},
      {id:2, nome:'João', login:'João', senha:'123', perfil: avaliador}];
   }

   login (nome: string, senha:string): Boolean{
    
    for (let i =0; i<this.usuarios.length; i++){
      let usr = this.usuarios[i];

      if ((usr.nome == nome) && (usr.senha == senha))
      {
        this.logado = usr;
        return true;
      }
    }
    return false;
   }
}
