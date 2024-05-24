import { useEffect, useState, useContext } from 'react';
import { getDocs, query, collection, where, orderBy } from 'firebase/firestore';
import { db } from '../../Firebase/firebase.config';
import ProductItemList from '../Components/Menu/ProductItemList';
import Loading from '../Components/Loading';
import BarraFiltradora from '../Components/Menu/BarraFiltradora';
import { DateBooking } from '../Context/DateContext';
import Carrito from '../Components/Menu/Carrito';
import { useNavigate } from 'react-router-dom';

const MenuView = () => {
  const { categoria, active, idReserva } = useContext(DateBooking);
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (idReserva == '') {
      navigate('/reservas');
    } else {
      const desagregado = {};
      const comidas = collection(db, 'menu');
      const subcomidas = query(comidas, where('Categoria', '==', categoria));
      getDocs(subcomidas).then((datos) => {
        const docs = datos.docs.map((doc) => ({
          ...doc.data(),
        }));
        docs.forEach((item) => {
          desagregado[item.Subcategoria] ??= [];
          desagregado[item.Subcategoria].push(item);
        });
        setSubcategorias(desagregado);
      });

      const categoriasDB = collection(db, 'categoriasmenu');
      const categoriasQuery = query(categoriasDB, orderBy('orden', 'asc'));
      getDocs(categoriasQuery).then((datos) => {
        const docs = datos.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategorias(docs);
      });
    }
  }, [categoria]);

  console.log(idReserva);
  return (
    <>
      <BarraFiltradora datos={categorias} />
      <h1 className="titleMenu">MENÚ</h1>
      <p className="refWarn">*Imagenes de referencia</p>
      <h2 className="titleCategoriaPlatos">{categoria.toUpperCase()}</h2>
      {Object.keys(subcategorias).length == 0 ? (
        <Loading />
      ) : (
        Object.keys(subcategorias).map((subcategoria) => {
          return (
            <ProductItemList
              key={subcategoria}
              menu={subcategorias[subcategoria]}
            />
          );
        })
      )}
      {active ? <Carrito /> : null}
    </>
  );
};

export default MenuView;
