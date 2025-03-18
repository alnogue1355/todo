export interface ICreateCommand {
  user: string;
  name: string;
}

export class CreateCommand implements ICreateCommand {
  constructor(data: ICreateCommand) {
    this.user = data.user;
    this.name = data.name;
  }
  user: string;
  name: string;
}
