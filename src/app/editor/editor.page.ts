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
  artigos: [];
  usrLogado: any;


  constructor(private router: Router, private services: ProviderService) {

    this.getArtigos();
    this.usrLogado = this.services.logado;
    console.log(this.services.logado);

  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/home'])
  }

  cadastraArtigo() {
    this.router.navigate(['/artigo'])

  }

  async getArtigos() {
    const { value } = await Preferences.get({ key: 'artigos' });
    console.log(value);
    this.artigos = JSON.parse(value)
    console.log(this.artigos);
  }



}
