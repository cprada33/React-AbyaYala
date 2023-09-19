import { useEffect, useState } from 'react';
import { getDocs, query, collection } from 'firebase/firestore';
import { db } from '../../Firebase/firebase.config';
import ProductItemList from '../Components/Menu/ProductItemList';
import Loading from '../Components/Loading';

const MenuView = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const comidas = collection(db, 'menu');
    getDocs(query(comidas)).then((datos) => {
      const docs = datos.docs.map((doc) => ({
        ...doc.data(),
      }));
      setMenu(docs);
    });
  }, []);

  const platosFuertes = menu.filter(
    (plato) => plato.Categoria === 'Platos fuertes',
  );
  const platosFuertesVeganos = menu.filter(
    (plato) => plato.Categoria === 'Platos fuertes veganos',
  );
  const bebidas = menu.filter((plato) => plato.Categoria === 'Bebidas');
  const bebidasBar = menu.filter((plato) => plato.Categoria === 'Bebidas bar');
  const snacks = menu.filter((plato) => plato.Categoria === 'Snacks');
  const snacksVeganas = menu.filter(
    (plato) => plato.Categoria === 'Platos fuertes',
  );
  const bebidasCalientes = menu.filter(
    (plato) => plato.Categoria === 'Bebidas calientes',
  );
  const desayunos = menu.filter((plato) => plato.Categoria === 'Desayunos');
  const desayunosVeganos = menu.filter(
    (plato) => plato.Categoria === 'Desayunos veganos',
  );

  console.log(
    menu,
    platosFuertes,
    platosFuertesVeganos,
    snacks,
    snacksVeganas,
    bebidas,
    bebidasBar,
    bebidasCalientes,
    desayunos,
    desayunosVeganos,
  );

  return (
    <>
      <h1 className="titleMenu">MENÚ</h1>
      <p className="refWarn">*Imagenes de referencia</p>
      <h2 className="titleCategoriaPlatos">Platos fuertes</h2>
      {menu.length > 0 ? <ProductItemList menu={platosFuertes} /> : <Loading />}
      <p></p>
    </>
  );
};

export default MenuView;
