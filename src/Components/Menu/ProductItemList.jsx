import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from './ProductItem';

const ProductItemList = ({ menu }) => {
  return (
    <>
      <div className="productList">
        {menu[0].Subcategoria ? (
          <h2 className="subcategoriaTitle">
            {menu[0].Subcategoria.toUpperCase()}
          </h2>
        ) : null}
        <Row xxs={2} md={5} className="g-4 gridProductList">
          {menu.map((item) => {
            return (
              <Col key={item.Producto} className="colProductList">
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
