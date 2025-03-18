export interface IAppUpdateCommand {
  id: number;
  title: string;
  description: string;
  detail: string;
  completed: boolean;
  state:string;
}

export class AppUpdateCommand implements IAppUpdateCommand {
  constructor(data: IAppUpdateCommand) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.detail = data.detail;
    this.completed = data.completed;
    this.state = data.state
  }
  id: number;
  title: string;
  description: string;
  detail: string;
  completed: boolean;
  state: string;
}
