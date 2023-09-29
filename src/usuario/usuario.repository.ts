import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UsuarioRepository implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const oneKb = 1000;
    return value.size < oneKb;
  }
  private usuario = [];

  async salvar(usuario) {
    this.usuario.push(usuario);
    console.log(this.usuario);
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
    )
    return this.compararEmail !== undefined
  }
}
