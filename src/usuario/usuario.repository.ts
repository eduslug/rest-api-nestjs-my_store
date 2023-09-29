import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { usuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const oneKb = 1000;
    return value.size < oneKb;
  }
  private usuario: usuarioEntity[] = [];

  async salvar(usuario:usuarioEntity) {
    this.usuario.push(usuario);
  }
  async listar() {
    return this.usuario;
  }
  async atualizar() {
    this.usuario.pop();
  }
  async compararEmail(email: string) {
    const possivelUsuario = this.usuario.find(
      (usuario) => usuario.email === email,
    );
    return this.compararEmail !== undefined;
  }
}
