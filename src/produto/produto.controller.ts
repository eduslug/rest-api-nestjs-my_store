import {Controller,Get,Header,Post,Redirect,Req,Body,Put,Delete} from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriarProdutoDTO } from './dto/CriarProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  
  constructor(private usuarioRepository: ProdutoRepository){

  }
  @Post()
  @Header('Cache-Control', 'teste')
  async criarUsuario(@Body() dadosProduto: CriarProdutoDTO) {
    this.usuarioRepository.
    salvar(dadosProduto);
    return dadosProduto;
  }

  @Get()
  @Header('Cache-Control', 'teste')
  async ListarUsuario(dadosProduto: string) {
    
    return this.usuarioRepository.listar();
  }

  @Put()
  @Header('Cache-Control', 'teste')
  async atualizarUsuario(@Body() dadosProduto: string) {
    return dadosProduto;
  }
  @Delete()
  @Header('Cache-Control', 'teste')
  async deletarUsuario(dadosProduto: string) {
    return dadosProduto;
  }
}
