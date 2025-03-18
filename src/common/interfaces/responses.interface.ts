export interface IResponse<D = undefined> {
  code: string;
  data: D | undefined | object;
  isSuccess: boolean;
  message: string;
  status: number;
}
