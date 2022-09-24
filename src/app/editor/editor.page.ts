import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { StorageService } from '../service/storage.service';
import { Preferences } from '@capacitor/preferences';
import { ProviderService } from '../service/provider.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit {
  artigos: any[];
  usrLogado: any;


  constructor(private router: Router, private services: ProviderService) {

    this.usrLogado = this.services.logado;
    this.getArtigos(this.usrLogado.id);
    console.log(this.usrLogado);

  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/home'])
  }

  cadastraArtigo() {
    this.router.navigate(['/artigo'])

  }

  async getArtigos(id: number) {
    const { value } = await Preferences.get({ key: 'artigos' });

    
    let aTemp = JSON.parse(value);
    let aArtigosEditor = [];
    aTemp.forEach(function (oArtigo) {

      if (oArtigo.idEditor == id) {
        aArtigosEditor.push(oArtigo);
      }

    });

    this.artigos = aArtigosEditor;
    console.log(this.artigos);
  }




}
