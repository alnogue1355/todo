export interface IUpdateCommand {
  id: number;
  code: string
  name: string;
}

export class UpdateCommand implements IUpdateCommand {
  constructor(data: IUpdateCommand) {
    this.id = data.id;
    this.code = data.code;
    this.name = data.name;
  }
  id: number;
  code: string;
  name: string;
}
