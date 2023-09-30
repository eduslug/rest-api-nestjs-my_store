import {  Controller,  Get,  Header,  Post,  Redirect,  Req,  Body,  Put,  Delete,  Param,
} from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriarUsuario.dto';
import { usuarioEntity } from './usuario.entity';
import { v4 } from 'uuid';
import { AtualizaUsuarioDTO } from './dto/atualiza.dto';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criarUsuario(@Body() dadosDousuario: CriaUsuarioDTO) {
    const UsuarioEntity = new usuarioEntity();
    UsuarioEntity.nome = dadosDousuario.nome;
    UsuarioEntity.email = dadosDousuario.email;
    UsuarioEntity.senha = dadosDousuario.senha;
    UsuarioEntity.id = v4();
    this.usuarioRepository.salvar(UsuarioEntity);
    return dadosDousuario;
  }

  @Get()
  @Header('Cache-Control', 'teste')
  async ListarUsuario(dadosDousuario: string) {
    return this.usuarioRepository.listar();
  }

  @Put('/:id')
  async atualizaUsuario(@Param('id') id: string, @Body() novosUsuario: AtualizaUsuarioDTO) {
     const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosUsuario)

     return {
      usuario:usuarioAtualizado,
      message:'usuario atualizado com sucesso'
     }
  }
  @Delete()


  @Header('Cache-Control', 'teste')
  async deletarUsuario(dadosDousuario: string) {
    return dadosDousuario;
  }
}
