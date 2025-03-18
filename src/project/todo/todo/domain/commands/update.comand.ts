export interface IUpdateCommand {
  id: number;
  title: string;
  description: string;
  detail: string;
  completed: boolean;
}

export class UpdateCommand implements IUpdateCommand {
  constructor(data: IUpdateCommand) {
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
  completedAt?: Date;
}
