import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/CartSlice';
import { Link } from 'react-router-dom';

export const Carts = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (productId) => {
    dispatch(remove(productId));
  };
  const products =
    cartProducts.length > 0 ? (
      cartProducts.map((product) => (
        <div
          className="col-md-3"
          style={{ marginBottom: '20px' }}
          key={product.id}
        >
          <Card style={{ height: 'h-100' }}>
            <div className="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: '100px', height: '130px' }}
              />
            </div>

            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ background: 'white' }}>
              <Button
                variant="danger"
                onClick={() => removeFromCart(product.id)}
              >
                Remove Item
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ))
    ) : (
      <div>
        <p>No product found</p>
        <Link to="/">Back to products</Link>
      </div>
    );
  return (
    <div>
      <h1>Carts</h1>
      <div className="row py-5 px-4">{products}</div>
    </div>
  );
};
