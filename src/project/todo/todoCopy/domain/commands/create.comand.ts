export interface ICreateCommand {
  title: string;
  description: string;
  detail: string;
  userId: number;
  state: string;
}

export class CreateCommand implements ICreateCommand {
  constructor(data: ICreateCommand) {
    this.title = data.title;
    this.description = data.description;
    this.detail = data.detail;
    this.userId = data.userId;
    this.state = data.state;
  }
  title: string;
  description: string;
  detail: string;
  userId: number;
  state: string;
}
