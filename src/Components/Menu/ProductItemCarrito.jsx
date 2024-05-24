import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const ProductItemCarrito = ({ producto, tamañoH, tamañoW }) => {
  return (
    <div>
      <Card sx={{ display: 'flex', width: tamañoW * 3, height: tamañoH }}>
        <CardMedia
          component="img"
          sx={{ width: tamañoW, height: tamañoH }}
          image="https://firebasestorage.googleapis.com/v0/b/abyayala-c7fa8.appspot.com/o/menu%2Fajiaco-de-pollo%20(1).jpg?alt=media&token=f8196aea-6bdd-4851-a268-73935c59adce"
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto', padding: '10px' }}>
            <p className="pProductoCarrito tit">{producto.Producto}</p>
            <p className="pProductoCarrito">
              ${producto.Precio.toLocaleString('es-ES')}
            </p>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default ProductItemCarrito;
