import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  public EnviarTermino(termino){
    console.log(termino);
    this.router.navigate(['buscarHeroe',termino])
  }

}
