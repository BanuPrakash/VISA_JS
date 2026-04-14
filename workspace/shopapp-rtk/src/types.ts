export type Product = {
  id: number;
  title: string;
  description?: string;
  category: string;
  price: number;
  images: string[];
  thumbnail: string;
}

export type ProductsResponse = {
  products: Product[]
}

// inheritance
// for interface CartItem extends Product 
export type CartItem = Product & {
    qty : number,
    amount : number
}