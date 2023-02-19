import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { Produtos } from './objetos/produtos';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent {
  
  id: any
  produto: Produtos = new Produtos('Cadeira', 900)

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit (): void {
    this.route.params.subscribe(parametros => {

      this.produto.preco = this.produto.aplicarDesconto(900)

      if(parametros['id']){
        this.id = parametros['id']
        alert(this.id)
      }
    })

    
  }

}
