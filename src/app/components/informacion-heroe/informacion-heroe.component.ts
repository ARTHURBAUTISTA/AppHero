import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroeService } from '../../sevices/heroe.service';

@Component({
  selector: 'app-informacion-heroe',
  templateUrl: './informacion-heroe.component.html',
  styleUrls: ['./informacion-heroe.component.css']
})
export class InformacionHeroeComponent implements OnInit {

  public HeroeFiltrado: any = {};
  public nuevacasa:string="";

  constructor(private activatedrouter: ActivatedRoute, private _HeroeService: HeroeService) {
    // console.log('soy el constructor');
    const IdHeroURL = this.activatedrouter.snapshot.paramMap.get('id');

    this.HeroeFiltrado = this._HeroeService.BuscarHeroe(IdHeroURL);

    console.log(this.HeroeFiltrado);

   
    console.log(this.HeroeFiltrado.casa);

  }

  ngOnInit() {
    // console.log('soy oninit');

  }

 

}
