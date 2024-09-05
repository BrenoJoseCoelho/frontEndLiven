import React from 'react';
import { useCart } from '../context/CartContext';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { Container, Row, Col } from 'react-bootstrap';
import '../../src/Cart.css'; // Importar o CSS específico para estilização

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <Container>
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <Row>
          <Col md={8}>
            <Row>
              {cart.map((item) => (
                <Col key={item.id} sm={6} md={4} lg={3}>
                  <CartItem
                    item={item}
                    onRemove={() => removeFromCart(item.id)}
                    onUpdateQuantity={(quantity) => updateQuantity(item.id, quantity)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <CartSummary />
          </Col>
        </Row>
      )}
    </Container>
  );
};
