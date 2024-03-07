import { Link } from 'react-router-dom';
import ReservaItem from './ReservaItem';
import { useState, useEffect } from 'react';
import { db } from '../../../Firebase/firebase.config';
import { getDocs, collection } from 'firebase/firestore';

const ReservaList = () => {
  const [reserva, setReserva] = useState([]);

  useEffect(() => {
    getDocs(collection(db, 'reservas')).then((datos) => {
      const docs = datos.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReserva(docs);
    });
  }, []);
  return (
    <>
      <div className="reservasSection">
        {reserva
          .slice()
          .reverse()
          .map((item) => {
            return (
              <Link
                className="link"
                to={`/reservas/${item.idReserva}`}
                key={item.idReserva}
              >
                {' '}
                <ReservaItem reserva={item} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default ReservaList;
