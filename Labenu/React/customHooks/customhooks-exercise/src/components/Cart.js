import { Item } from "./Item";
import { useCounter } from "./hook/useCounter";

export const Cart = () => {
  const quantity = useCounter(0);

  return (
    <div>
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity.value}
        onIncrement={quantity.somar}
        onDecrement={quantity.subtrair}
        onReset={quantity.reset}
      />
    </div>
  );
};
