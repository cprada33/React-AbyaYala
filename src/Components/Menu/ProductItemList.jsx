import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from './ProductItem';

const ProductItemList = ({ menu }) => {
  return (
    <>
      <div className="productList">
        <Row xxs={2} md={5} className="g-4 gridProductList">
          {menu.map((item) => {
            return (
              <Col key={item.Plato}>
                <ProductItem producto={item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default ProductItemList;
