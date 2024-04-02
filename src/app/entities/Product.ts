interface Ingredients {
  _id: string;
  name: string;
  icon: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: Ingredients[];
}
