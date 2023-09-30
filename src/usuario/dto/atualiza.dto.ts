import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class AtualizaUsuarioDTO {
  @IsString({ message: 'usuario não cadastrado corretamente' })

  @IsNotEmpty()
  @IsOptional()
  nome: string;

  @IsOptional()
  @IsEmail(undefined, { message: '' })
  email: string;

  @IsOptional()
  @MinLength(6, { message: '' })
  senha: string;
}
