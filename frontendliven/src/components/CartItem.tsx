import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { CartItem as CartItemType } from '../context/CartContext';
import '../../src/Cart.css';  // Certifique-se de que o CSS está sendo importado

interface CartItemProps {
  item: CartItemType;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <Card className="cart-item mb-4">
      <Card.Img variant="top" src={item.image} alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>R$ {item.price.toFixed(2)}</Card.Text>
        <Form.Group controlId="quantity">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            type="number"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(Number(e.target.value))}
            min="1"
          />
        </Form.Group>
        <Button variant="danger" onClick={onRemove} className="mt-2">
          Remover
        </Button>
      </Card.Body>
    </Card>
  );
};
