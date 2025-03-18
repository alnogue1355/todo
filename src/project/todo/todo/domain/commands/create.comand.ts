export interface ICreateCommand {
  title: string;
  description: string;
  detail: string;
  userId: number;
}

export class CreateCommand implements ICreateCommand {
  constructor(data: ICreateCommand) {
    this.title = data.title;
    this.description = data.description;
    this.detail = data.detail;
    this.userId = data.userId;
  }
  title: string;
  description: string;
  detail: string;
  userId: number;
}
