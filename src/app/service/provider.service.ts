import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Key } from 'protractor';


export const editor = 1
export const avaliador = 2


@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  usuarios: { id: number, nome: string, login: string, senha: string, perfil: number }[] = [];
  logado: any;
  index: number;

  artigos: {
    titulo: string,
    nomeAutores: string,
    data: Date,
    palavraChave: string,
    idEditor: number,
    idVal: number
  }[] = [];


  constructor() {
    this.logado = null;
    this.index = 0;

    this.usuarios = [
      {
        id: 1,
        nome: 'Diego',
        login: 'Diego',
        senha: '123',
        perfil: editor
      },
      {
        id: 2,
        nome: 'João',
        login: 'João',
        senha: '123',
        perfil: avaliador
      }],

      this.artigos = [
        {
          titulo: 'titulo1',
          nomeAutores: 'Diego, Raquel',
          data: new Date("2020-09-22"),
          palavraChave: 'chave1',
          idEditor: 1,
          idVal: 2
        },

        {
          titulo: 'titulo2',
          nomeAutores: 'Gustavo, Carol',
          data: new Date("2021-09-22"),
          palavraChave: 'chave2',
          idEditor: 1,
          idVal: 2
        }];
        
        const setArtigo = async () => {
          await Preferences.set({
            key: 'artigos',
            value: JSON.stringify(this.artigos),
          });
        };
        setArtigo();
  } 


  login(nome: string, senha: string): Boolean {

    for (let i = 0; i < this.usuarios.length; i++) {
      let usr = this.usuarios[i];

      if ((usr.nome == nome) && (usr.senha == senha)) {
        this.logado = usr;
        return true;
      }
    }
    return false;
  }
}
