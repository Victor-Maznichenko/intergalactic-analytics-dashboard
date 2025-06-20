interface Product {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
}

interface ProductCart extends Product {
  quantity: number;
  totalQuantity: number;
}

interface ProductsList {
  id: number;
  title: string;
  list: Product[];
}

interface ProductsResponse {
  products: ProductsList[];
}
