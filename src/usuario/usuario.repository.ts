import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { usuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const oneKb = 1000;
    return value.size < oneKb;
  }
  private usuario: usuarioEntity[] = [];

  async salvar(usuario: usuarioEntity) {
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

  private buscaPorId(id: string) {
    const possivelUsuario = this.usuario.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error('Usuário não existe');
    }
  }

  async atualiza(id: string, dadosDeAtualizacao: Partial<usuarioEntity>) {
    const usuario = this.buscaPorId(id);
    Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuario[chave] = valor;
    });

    return usuario;
  }

  async remove(id: string) {
    const usuario = this.buscaPorId(id);
    this.usuario = this.usuario.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id,
    );
    return usuario;
  }
}
