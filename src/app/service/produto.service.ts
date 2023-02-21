import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Produtos } from '../cadastro/objetos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = `${environment.API}produtos`

  constructor(private $http: HttpClient) { }

  listar(){
    return this.$http.get<Produtos[]>(`${this.API}`)
  }

  excluirIntem(id:any) {
    return this.$http.delete(`${this.API}/${id}`)
  } 

  adicionarIntem(prod: Produtos) {
    return this.$http.post(this.API, prod)
  }

  editarIntem(prod: Produtos) {
    return this.$http.put(`${this.API}/${prod.id}`, prod)
  }

  buscarIntemID(id:any) {
    return this.$http.get<Produtos>(`${this.API}/${id}`)
  }
}
