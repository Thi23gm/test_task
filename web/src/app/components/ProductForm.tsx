import React, { useState } from 'react';

interface ProductFormProps {
  onAdd: (product: { name: string; price: number; quantity: number }) => Promise<void>;
}

function ProductForm({ onAdd }: ProductFormProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const product = { name, price: Number(price), quantity: Number(quantity) };
    await onAdd(product);
    setName('');
    setPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ProductForm;
