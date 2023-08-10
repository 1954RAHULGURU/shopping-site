import React, { useState } from 'react';

// Function component for the e-commerce site
function ECommerceSite() {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  function addToCart(product) {
    // Check if the product is already in the cart
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      // Product already exists in the cart, update its quantity
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Product doesn't exist in the cart, add it as a new item with quantity 1
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }

    console.log("Product added to cart:", product);
  }

  // Example products (you can fetch them from an API in a real application)
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 1, name: "Laptop", price: 800 }, // This is a duplicate of the first laptop
  ];

  return (
    <div>
      <h1>E-Commerce Site</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ECommerceSite;
