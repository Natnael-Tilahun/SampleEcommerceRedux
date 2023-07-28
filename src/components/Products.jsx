import { useEffect } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/CartSlice';
import { getProducts } from '../store/ProductSlice';
import StatusCode from '../../utils/StatusCode';

export const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    dispatch(getProducts());
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (status === StatusCode.LOADING) {
    return <h1>Loading ...</h1>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert variant="danger">
        Something went wrong. Please try again later.
      </Alert>
    );
  }

  const ProductCards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: '20px' }} key={product.id}>
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row py-5 ">{ProductCards}</div>
    </div>
  );
};
