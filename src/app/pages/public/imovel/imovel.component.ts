import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {ImovelService} from "../../../services/imovel.service";
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

  constructor(private servico: ImovelService, private route: ActivatedRoute) {
  }

  busca(id) {
    this.servico.getImovel(id).then(
      imovel => this.imoveis = imovel
    );
  }

  pdf(id) {
    let pdf = id;
  }

  apagarImovel(id) {
    let im = id;
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (Params: any) => {
        this.imoveis = null;
        this.id = Params['id'];
        this.busca(this.id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
