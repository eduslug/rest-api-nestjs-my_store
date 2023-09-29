import {
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';

export class EmailVAlidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) {}
  async validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    throw new Error();
  }
}
