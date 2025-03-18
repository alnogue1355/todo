export interface IUpdateCommand {
  id: number;
  user: string;
  name: string;
}

export class UpdateCommand implements IUpdateCommand {
  constructor(data: IUpdateCommand) {
    this.id = data.id;
    this.user = data.user;
    this.name = data.name;
  }
  id: number;
  user: string;
  name: string;
}
