import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductItemProps {
  product: Product;
  onDelete: (productId: number) => void;
}

function ProductItem({ product, onDelete }: ProductItemProps) {
  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <li>
      {product.name} - ${product.price} ({product.quantity} units)
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ProductItem;
