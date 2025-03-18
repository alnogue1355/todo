export interface IDomain {
  id?: number;
  title: string;
  description: string;
  detail: string;
  createdAt?: Date;
  completed: boolean;
  completedAt?: Date;
  user: string;
  userId: number;
}

export class Domain implements IDomain {
  constructor(data: IDomain) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.detail = data.detail;
    this.createdAt = data.createdAt;
    this.completed = data.completed;
    this.completedAt = data.completedAt;
    this.userId = data.userId;
    this.user = data.user;
  }
  id?: number;
  title: string;
  description: string;
  detail: string;
  createdAt?: Date;
  completed: boolean;
  completedAt?: Date;
  user: string;
  userId: number;
}
