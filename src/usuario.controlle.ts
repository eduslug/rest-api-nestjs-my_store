import {
  Controller,
  Get,
  Header,
  Post,
  Redirect,
  Req,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository = new UsuarioRepository();
  @Post()
  @Header('Cache-Control', 'teste')
  async criarUsuario(@Body() dadosDousuario: string) {
    this.usuarioRepository.salvar(dadosDousuario);
    return dadosDousuario;
  }

  @Get()
  @Header('Cache-Control', 'teste')
  async ListarUsuario(dadosDousuario: string) {
    return this.usuarioRepository.listar();
  }

  @Put()
  @Header('Cache-Control', 'teste')
  async atualizarUsuario(@Body() dadosDousuario: string) {
    return dadosDousuario;
  }
  @Delete()
  @Header('Cache-Control', 'teste')
  async deletarUsuario(dadosDousuario: string) {
    return dadosDousuario;
  }
}
