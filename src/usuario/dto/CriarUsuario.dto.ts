import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CriaUsuarioDTO {
  @IsString({ message: 'usuario não cadastrado corretamente' })
  @IsNotEmpty()
  nome: string;

  @IsEmail(undefined, { message: '' })
  email: string;

  @MinLength(6, { message: '' })
  senha: string;
}
