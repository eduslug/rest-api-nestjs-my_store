import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CriarProdutoDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  nome: string;

  @IsString()
  valor: number;

  @IsString()
  quantidadeDisponivel: number;

  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  descricao: string;
}
