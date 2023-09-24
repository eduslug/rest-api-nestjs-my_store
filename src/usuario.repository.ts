export class UsuarioRepository {
  private usuario = [];

  async salvar(usuario) {
    this.usuario.push(usuario);
    console.log(this.usuario);
  }
}
