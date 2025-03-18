export interface ICreateCommand {
  id?: number;
  code: string;
  name: string;
}

export class CreateCommand implements ICreateCommand {
  constructor(data: ICreateCommand) {
    this.id = data.id;
    this.code = data.code;
    this.name = data.name;
  }
  id?: number;
  code: string;
  name: string;
}
