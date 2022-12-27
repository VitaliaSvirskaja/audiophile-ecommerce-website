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

export interface ProductGallery {
  first: ProductImages;
  second: ProductImages;
  third: ProductImages;
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
  category: string;
  description: string;
  includes: Array<IncludedItems>;
  features: string;
  others: Array<Recommendations>;
  gallery: ProductGallery;
}
