import { useState } from "react";

export function useCounter(initialValue) {
  const [quantity, setQuantity] = useState(initialValue);

  const somar = () => {
    setQuantity((q) => q + 1);
  };
  const subtrair = () => {
    setQuantity((q) => q - 1);
  };
  const reset = () => {
    setQuantity(0);
  };
  const value = quantity;

  return { value, somar, subtrair, reset };
}
