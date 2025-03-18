export interface IAppCreateCommand {
  title: string;
  description: string;
  detail: string;
  userId: number;
  state:string;
}

export class AppCreateCommand implements IAppCreateCommand {
  constructor(data: IAppCreateCommand) {
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
