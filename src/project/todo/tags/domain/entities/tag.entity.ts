export interface IDomain {
  id?: number;
  code: string;
  name: string;
}

export class Domain implements IDomain {
  constructor(data: IDomain) {
    this.id = data.id;
    this.code = data.code;
    this.name = data.name;
  }
  id?: number;
  code: string;
  name: string;
}
