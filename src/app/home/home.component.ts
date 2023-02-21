import { Component, OnInit } from '@angular/core';
import { Produtos } from '../cadastro/objetos/produtos';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  prod: any
  carregar: boolean = false
  produtos: Array<Produtos> = []
  constructor(private produtoService: ProdutoService, private router:Router) { }

  ngOnInit(): void {

  this.produtoService.listar().subscribe(prods => {

    setTimeout(() => {
      this.carregar = true
      this.produtos = prods
  
    },1000)
  }) 
  }
  excluirIntem =(id:any) => {
    this.produtoService.excluirIntem(id).subscribe(
      success => console.log("deletou"),
      error => console.log("deu ruim"),
      () => console.log('Requisição completa'),
      
    )
    this.ngOnInit();
  }

  editar =(id:any) => {
    this.router.navigate(['cadastro', id])
  }
  
}
