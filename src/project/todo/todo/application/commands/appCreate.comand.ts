export interface IAppCreateCommand {
  title: string;
  description: string;
  detail: string;
  userId: number;
}

export class AppCreateCommand implements IAppCreateCommand {
  constructor(data: IAppCreateCommand) {
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
