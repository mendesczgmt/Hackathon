import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Produtos } from './objetos/produtos';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent {
  
  id: any
  produto: Produtos = new Produtos(0, '', 0)

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodServices: ProdutoService
  ) { }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe(parametros => {

      if(parametros['id']){
        this.id = parametros['id']
      }
    })
  }

  adicionar = () =>{
    this.prodServices.adicionarIntem(this.produto).subscribe(
      success => console.log("salvou"),
      error => console.log("deu ruim"),
      () => console.log('Requisição completa'))
      this.router.navigate(['home'])
  }

}
