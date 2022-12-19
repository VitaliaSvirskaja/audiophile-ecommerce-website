// TODO: add missing properties

export interface IncludedItems {
  quantity: number;
  item: string;
}

export interface Product {
  id: number;
  name: string;
  includes: Array<IncludedItems>;
}
