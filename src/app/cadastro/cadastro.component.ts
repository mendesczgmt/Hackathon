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
  textoBotao: String = "Salvar"

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodServices: ProdutoService
  ) { }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe(parametros => {

      if(parametros['id']){
        this.textoBotao = "Editar"
        this.id = parametros['id']
        this.prodServices.buscarIntemID(this.id).subscribe(prod => {
          this.produto = prod
        }
        )
    }
    })
  }

  adicionar = () =>{
    if(this.textoBotao == 'Salvar') {
      this.prodServices.adicionarIntem(this.produto).subscribe(
        success => this.navegar('home'),
        error => console.log("deu ruim"),
        () => console.log('Requisição completa'))
         }
    else {
      this.editar()
    }
  }

  editar =() =>{
    this.prodServices.editarIntem(this.produto).subscribe(
      success => this.navegar('home'),
      error => console.log("deu ruim"),
      () => console.log('Requisição completa'))
      
  }

  navegar = (rota: any) => {
    this.router.navigate([rota])
  }

}
