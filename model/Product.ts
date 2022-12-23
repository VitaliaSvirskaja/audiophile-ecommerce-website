// TODO: add missing properties

export interface IncludedItems {
  quantity: number;
  item: string;
}

export interface ProductImages {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Recommendations {
  name: string;
  slug: string;
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
  image: ProductImages;
  new: boolean;
  price: number;
  description: string;
  includes: Array<IncludedItems>;
  features: string;
  others: Array<Recommendations>;
}
