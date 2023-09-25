import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  private produto = [];

  async salvar(produto) {
    this.produto.push(produto);
    console.log(this.produto);
  }
  async listar() {
    return this.produto;
  }
  async atualizar() {
    this.produto.pop();
  }
}
