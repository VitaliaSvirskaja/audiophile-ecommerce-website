// TODO: add missing properties

export interface IncludedItems {
  quantity: number;
  item: string;
}

export interface Recommendations {
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  includes: Array<IncludedItems>;
  features: string;
  others: Array<Recommendations>;
}
