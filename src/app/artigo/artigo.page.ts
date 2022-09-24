import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../service/provider.service';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router'


@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.page.html',
  styleUrls: ['./artigo.page.scss'],
})
export class ArtigoPage implements OnInit {
  artigos: any[];
  titulo: string;
  nomeAutores: string;
  palavraChave: string;
  data: Date;
  avaliadores: any[];
  avaliadorFrontEnd: any;

  constructor(private router: Router, private services: ProviderService) { 
    let aval = this.services.usuarios.filter((avaliador) => { 
      if(avaliador.perfil === 2)
      {
        return avaliador;
      }
     });

     this.avaliadores = aval;
  }
  ngOnInit() {
  }

  async criarArtigo() {
    this.services.criarArtigo(this.titulo, this.nomeAutores, this.palavraChave, this.data, this.avaliadorFrontEnd);
    console.log( this.services.artigos);
    this.router.navigate(['/editor'])
  }
}
