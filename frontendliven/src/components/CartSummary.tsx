import React from 'react';
import { Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

export const CartSummary: React.FC = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Card className="cart-summary">
      <Card.Body>
        <Card.Title>Resumo do Carrinho</Card.Title>
        <Card.Text><strong>Total de Produtos:</strong> {totalItems}</Card.Text>
        <Card.Text><strong>Valor Total:</strong> R$ {totalPrice.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};
