import { Controller, Get, Header, Post, Redirect, Req, Body } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
    private usuarioRepository = new UsuarioRepository ()
  @Post()
  @Header('Cache-Control', 'teste')
  async criarUsuario(@Body() dadosDousuario: string) {
    this.usuarioRepository.salvar(dadosDousuario)
    return dadosDousuario;
  }

  @Get()
  @Header('Cache-Control', 'teste')
  async postUsuario(dadosDousuario: string) {
    return dadosDousuario;
  }
}
