export interface IAppCreateCommand {
  id?: number;
  code: string;
  name: string;
}

export class AppCreateCommand implements IAppCreateCommand {
  constructor(data: IAppCreateCommand) {
    this.id = data.id;
    this.code = data.code;
    this.name = data.name;
  }
  id?: number;
  code: string;
  name: string;
}
