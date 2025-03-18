export class GetAllQuery {
  constructor(
    public readonly paginate: {
      page: number;
      limit: number;
      active?: boolean;
    },
  ) {}
}
