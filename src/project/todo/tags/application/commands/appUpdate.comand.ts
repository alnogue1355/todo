export interface IAppUpdateCommand {
  id: number;
  code: string
  name: string;
}

export class AppUpdateCommand implements IAppUpdateCommand {
  constructor(data: IAppUpdateCommand) {
    this.id = data.id;
    this.code = data.code;
    this.name = data.name;
  }
  id: number;
  code: string;
  name: string;
}
