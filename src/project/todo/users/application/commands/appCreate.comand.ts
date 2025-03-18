export interface IAppCreateCommand {
  user: string;
  name: string;
}

export class AppCreateCommand implements IAppCreateCommand {
  constructor(data: IAppCreateCommand) {
    this.user = data.user;
    this.name = data.name;
  }
  user: string;
  name: string;
}
