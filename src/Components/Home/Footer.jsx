import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="correo">
          <EmailIcon />
          <p className="correoLabel">reservas.abyayalahostel@gmail.com</p>
        </div>
        <div className="text-footer">
          Puedes entregar tu habitación y seguir disfrutando de nuestros
          servicios Abya Yala Hostel hasta las 5:00pm.
        </div>
        <div className="text-footer-dos primero">
          Copyright @ ABYA YALA HOSTEL
        </div>
        <div className="text-footer-dos">Nimaima, Cundinamarca</div>
      </section>
    </>
  );
};

export default Footer;
