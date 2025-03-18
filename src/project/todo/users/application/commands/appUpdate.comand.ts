export interface IAppUpdateCommand {
  id: number;
  user: string;
  name: string;
}

export class AppUpdateCommand implements IAppUpdateCommand {
  constructor(data: IAppUpdateCommand) {
    this.id = data.id;
    this.user = data.user;
    this.name = data.name;
  }
  id: number;
  user: string;
  name: string;
}
