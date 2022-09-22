import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/home'])
  }

}
