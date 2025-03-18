export interface IDomain {
  id?: number;
  user: string;
  name: string;
}

export class Domain implements IDomain {
  constructor(data: IDomain) {
    this.id = data.id;
    this.user = data.user;
    this.name = data.name;
  }
  id?: number;
  user: string;
  name: string;
}
