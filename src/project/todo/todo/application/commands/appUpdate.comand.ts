export interface IAppUpdateCommand {
  id: number;
  title: string;
  description: string;
  detail: string;
  completed: boolean;
}

export class AppUpdateCommand implements IAppUpdateCommand {
  constructor(data: IAppUpdateCommand) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.detail = data.detail;
    this.completed = data.completed;
  }
  id: number;
  title: string;
  description: string;
  detail: string;
  completed: boolean;
}
