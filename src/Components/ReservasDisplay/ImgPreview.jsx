import { DateBooking } from '../../Context/DateContext';
import { useContext, useEffect, useRef } from 'react';

const ImgPreview = ({ imagen }) => {
  const { setImgPreview } = useContext(DateBooking);
  const imgRef = useRef(null);
  let click = 2;

  useEffect(() => {
    document.addEventListener('click', handleClickEvent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickEvent = (event) => {
    if (
      imgRef.current &&
      !imgRef.current.contains(event.target) &&
      click == 3
    ) {
      setImgPreview(false);
      click--;
      document.removeEventListener('click', handleClickEvent);
    } else if (click == 2) {
      click++;
    }
  };

  return (
    <>
      <div className="imgOverlay">
        <div className="imgContainer">
          <span
            className="closerOverlay"
            onClick={() => {
              setImgPreview(false);
            }}
          >
            X
          </span>
          <img
            src={imagen}
            className="imgDetail"
            alt="recibo de pago"
            ref={imgRef}
          />
        </div>
      </div>
    </>
  );
};

export default ImgPreview;
