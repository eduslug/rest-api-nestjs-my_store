import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/usuarios')
export class UsuarioController {
  @Post()
  criarUsuario(): string {
    return 'usuario criado';
  }
}
