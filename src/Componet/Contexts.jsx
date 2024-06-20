import React, { createContext, useContext, useState } from "react";
import { products } from "../Pages/ProductPage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [filterItems, setFilterItems] = useState(products);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
    // navigate('/logout')
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, product];
    });
  };
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const searchFilter = (searchValue) => {
    const filtered = products.filter((product) => {
      return product.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilterItems(filtered);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setCart,
        updateQuantity,
        removeFromCart,
        searchFilter,
        filterItems,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(CartContext);
};
