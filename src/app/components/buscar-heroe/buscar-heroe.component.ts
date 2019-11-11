import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroeService } from '../../sevices/heroe.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {

  private termino: string="";
  public heroesFiltrados: any={}

  constructor(private ActivatedRoute:ActivatedRoute,private _heroesService:HeroeService, private router:Router) { 
    this.ActivatedRoute.params.subscribe((terminoURL)=>{
      this.termino=terminoURL.termino
    
      console.log(this.termino)
      this.heroesFiltrados=this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroesFiltrados)
    })

  }

  

  ngOnInit() {

  }

  public MandaInformacion(idHero){
    console.log(idHero);
    this.router.navigate(['informacionheroe',idHero])
    
  }

}
