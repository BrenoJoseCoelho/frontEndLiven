import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<'products' | 'cart'>('products');

  return (
    <CartProvider>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setActiveMenu('products')} active={activeMenu === 'products'}>
            Produtos
          </Nav.Link>
          <Nav.Link onClick={() => setActiveMenu('cart')} active={activeMenu === 'cart'}>
            Carrinho
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container className="mt-4">
        {activeMenu === 'products' && <ProductList />}
        {activeMenu === 'cart' && <Cart />}
      </Container>
    </CartProvider>
  );
};

export { App };
