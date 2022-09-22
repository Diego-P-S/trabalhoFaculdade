import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliador',
  templateUrl: './avaliador.page.html',
  styleUrls: ['./avaliador.page.scss'],
})
export class AvaliadorPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['/home'])
  }

}
