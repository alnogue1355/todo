export interface GelAllDto<T> {
  records: T[];
  meta: {
    total?: number;
    page?: number;
    pages?: number;
    all?: boolean;
  };
}
