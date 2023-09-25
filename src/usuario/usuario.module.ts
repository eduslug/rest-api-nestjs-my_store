import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controlle';
import { UsuarioRepository } from './usuario.repository';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class UsuarioModule {}
