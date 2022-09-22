import { editor, ProviderService } from './../service/provider.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string;
  senha: string;
  mensagem: string;

  constructor(private service: ProviderService, private router: Router) { }


  login() {

    let acess = this.service.login(this.nome, this.senha);
    
    if (acess) {
      if (this.service.logado.perfil == editor) 
        this.router.navigate(['/editor'])
      
      else 
        this.router.navigate(['/avaliador'])
    }
    else
      this.mensagem = 'Acesso negado!';
  }
}
