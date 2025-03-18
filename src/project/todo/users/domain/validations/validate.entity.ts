import { Injectable } from '@nestjs/common';
import { IDomain } from '../entities/user.entity';

@Injectable()
export class EntityDomainValidations {
  validate(valid: IDomain, isUpdate: boolean): boolean {
    const validations: Array<{
      field: string;
      validator: (value: string) => boolean;
      required: boolean;
      value: string;
    }> = [
      {
        field: 'user',
        validator: (user) => this.isUserValid(user),
        required: !isUpdate,
        value: valid.user || '',
      },
      {
        field: 'name',
        validator: (name) => this.isUserValid(name),
        required: !isUpdate,
        value: valid.name || '',
      },
    ];

    return validations.every(
      (validation) =>
        !validation.required || validation.validator(validation.value),
    );
  }

  public isUserValid(user: string): boolean {
    const isAlphanumeric = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ'.-]+$/.test(user);
    return isAlphanumeric && user.length > 0 && user.length < 256;
  }

  public isNameValid(name: string): boolean {
    const isAlphanumeric = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ'.-]+$/.test(name);
    return isAlphanumeric && name.length > 0 && name.length < 51;
  }
}
