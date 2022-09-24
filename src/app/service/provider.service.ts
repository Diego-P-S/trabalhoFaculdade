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
    id: number;
    titulo: string,
    nomeAutores: string,
    data: Date,
    palavraChave: string,
    idEditor: number,
    idVal: number,
    status: null
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
        id: 3,
        nome: 'Gustavo',
        login: 'Gustavo',
        senha: '123',
        perfil: editor
      },
      {
        id: 2,
        nome: 'Joao',
        login: 'Joao',
        senha: '123',
        perfil: avaliador
      },    
      {
        id: 4,
        nome: 'Carol',
        login: 'Carol',
        senha: '123',
        perfil: avaliador
      }
    ];

    this.artigos = [
      { id:1,
        titulo: 'Viagem',
        nomeAutores: 'Diego, Raquel',
        data: new Date("2020-09-22"),
        palavraChave: 'chave1',
        idEditor: 1,
        idVal: 2,
        status: null
      },
      {
        id:2,
        titulo: 'Estudantes',
        nomeAutores: 'Diego, Raquel',
        data: new Date("2020-09-22"),
        palavraChave: 'chave1',
        idEditor: 3,
        idVal: 2,
        status: null
      },
      {
        id:3,
        titulo: 'titulo2',
        nomeAutores: 'Gustavo, Carol',
        data: new Date("2021-09-22"),
        palavraChave: 'chave2',
        idEditor: 1,
        idVal: 4,
        status: null
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

  async criarArtigo(titulo:string, nomeAutores:string, palavraChave:string, date:Date, avaliadorFrontEnd:any)
  {
    const { value } = await Preferences.get({ key: 'artigos' });
    let aTemp = JSON.parse(value);

    
    let newId: number = this.artigos.length;
    let artigo =   {
      id: newId,
      titulo: titulo,
      nomeAutores: nomeAutores,
      data: date,
      palavraChave: palavraChave,
      idEditor: this.logado.id,
      idVal: Number(avaliadorFrontEnd),
      status: null
    };
    
    this.artigos.push(artigo);
    Preferences.set({key: 'artigos', value: JSON.stringify(this.artigos)})

  }
}
