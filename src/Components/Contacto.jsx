import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


const Contacto = () => {
  return (
    <>
      <h1 className="titulo-form">Contacto</h1>
      <div className="grid-form">
          <Link to = "https://api.whatsapp.com/send/?phone=573112269303&text&type=phone_number&app_absent=0"><WhatsAppIcon/> +57 311 226 9303</Link>
          <Link to = "https://www.instagram.com/hostelabyayala/"><InstagramIcon/> Instagram</Link>
          <Link to = "https://www.facebook.com/abyayalahostel"><FacebookIcon/> Facebook</Link>
          <Link to = "mailto:reservas.abyayalahostel@gmail.com"><EmailIcon/> reservas.abyayalahostel@gmail.com</Link>
      </div>
    </>
  );
};

export default Contacto;
