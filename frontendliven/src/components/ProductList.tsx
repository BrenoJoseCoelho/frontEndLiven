import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Product } from '../types/product';
import '../../src/ProductList.css';

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const [expandedProductId, setExpandedProductId] = useState<number | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleToggleExpand = (id: number) => {
    setExpandedProductId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} sm={6} md={4} lg={3}>
          <Card className="product-card mb-4">
            <Card.Img variant="top" src={product.image} alt={product.title} className="product-image" />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className="product-description">
                {expandedProductId === product.id ? (
                  product.description
                ) : (
                  <>
                    {product.description.length > 100 ? (
                      <>
                        {product.description.slice(0, 100)}...
                        <Button variant="link" onClick={() => handleToggleExpand(product.id)}>
                          Ver mais
                        </Button>
                      </>
                    ) : (
                      product.description
                    )}
                  </>
                )}
              </Card.Text>
              <Card.Text>R$ {product.price.toFixed(2)}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Adicionar ao Carrinho
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
