import { IsNumber, IsString} from 'class-validator';

export class CriarProdutoDTO {
  @IsString()
  nome: string;

  @IsNumber()
  valor: number;

  @IsNumber()
  quantidadeDisponivel: number;

  @IsString()
  descricao: string;
}
