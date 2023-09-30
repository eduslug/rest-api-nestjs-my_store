import {  Controller,  Get,  Header,  Post,  Redirect,  Req,  Body,  Put,  Delete,
} from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriarUsuario.dto';
import { usuarioEntity } from './usuario.entity';
import { v4 } from 'uuid';


@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criarUsuario(@Body() dadosDousuario: CriaUsuarioDTO) {
    
    const UsuarioEntity = new usuarioEntity();
    UsuarioEntity.email = dadosDousuario.email;
    UsuarioEntity.senha = dadosDousuario.senha;
    UsuarioEntity.nome = dadosDousuario.nome;
    UsuarioEntity.id = v4();
    this.usuarioRepository.salvar(UsuarioEntity);
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
  async atualizaUsuario(){
    
  }
}
