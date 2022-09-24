import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { ProviderService } from '../service/provider.service';

@Component({
  selector: 'app-avaliador',
  templateUrl: './avaliador.page.html',
  styleUrls: ['./avaliador.page.scss'],
})
export class AvaliadorPage implements OnInit {
  artigos: any[];
  usrLogado: any;
  mensagem: any = '';
  mensagemCor: any = '';



  constructor( private router: Router, private services: ProviderService) { 
    this.usrLogado = this.services.logado;
    this.getArtigos(this.usrLogado.id);
    console.log(this.usrLogado);
  }
  
  ngOnInit() {
  }
  logout(){
    this.router.navigate(['/home'])
  }

  async getArtigos(id: number) {
    const { value } = await Preferences.get({ key: 'artigos' });

    
    let aTemp = JSON.parse(value);
    let aArtigosVal = [];
    console.log(aTemp);
    aTemp.forEach(function (oArtigo) {
      console.log(oArtigo.idVal+"=="+ id)
      if (oArtigo.idVal == id) {
        aArtigosVal.push(oArtigo);
      }
    });
    this.artigos = aArtigosVal;
   
  }

  aceitar(id: number){
    console.log('aceitar id ',id)

    let index = this.artigos.findIndex((artigo) => artigo.id=== id)
    if(index !== -1) {
      this.artigos[index].status = "aceito";
      console.log(this.artigos[index]);
      this.mensagem = "Artigo " + this.artigos[index].titulo + " Aceito";
      this.mensagemCor = "success";
    } else {
        console.log("error")
    }
    Preferences.set({key: 'artigos', value: JSON.stringify(this.artigos)})

  }

  recusar(id: number){
    let index = this.artigos.findIndex((artigo) => artigo.id=== id)
    if(index !== -1) {
      this.artigos[index].status = "Recusado";
      console.log(this.artigos[index]);
      this.mensagem = "Artigo " + this.artigos[index].titulo + " Recusado";
      this.mensagemCor = "danger";

    } else {
        console.log("error")
    }
    Preferences.set({key: 'artigos', value: JSON.stringify(this.artigos)})

  }
}
