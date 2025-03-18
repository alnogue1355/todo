export interface IAppCreateCommand {
  id?: number;
  code: string;
  name: string;
  category: string
  createdAt : Date;
}

export class AppCreateCommand implements IAppCreateCommand {
  constructor(data: IAppCreateCommand) {
    this.id = data.id;
    this.code = data.code;
    this.name = data.name;
    this.category = data.category;
    this.createdAt = data.createdAt;
  }
  id?: number;
  code: string;
  name: string;
  category: string;
  createdAt: Date;
}
