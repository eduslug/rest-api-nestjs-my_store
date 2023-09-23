import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controlle';
@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [],
})
export class AppModule {}
