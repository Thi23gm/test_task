import React from 'react';
import ProductItem from './ProductItem';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductListProps {
  products: Product[];
  onDelete: (productId: number) => void;
}

function ProductList({ products, onDelete }: ProductListProps) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ProductList;
