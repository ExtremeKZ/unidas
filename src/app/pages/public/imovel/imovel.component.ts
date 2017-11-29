import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Imovel} from "../../../model/imovel";

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.css']
})

export class ImovelComponent implements OnInit, OnDestroy {

  imoveis: Imovel;
  id: number;
  inscricao: Subscription;
  interesse: any;

  constructor(private rota: ActivatedRoute) {
  }

  ngOnInit() {
    this.inscricao = this.rota.data.subscribe((data: { imovel: Imovel }) => {
      this.imoveis = data.imovel;
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
