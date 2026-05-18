import "./Footer.css";
import Logo from "../../assets/Logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footerTop">
        <div className="footerBrand">
          <div className="footerLogoBox">
            <img src={Logo} alt="Logo RICL" className="footerLogo" />
          </div>
          <h3>Repuestos RICL</h3>
          <p>Repuestos Chevrolet originales y alternativos.</p>
        </div>

        <div className="footerInfo">
          <div>
            <h4>Contacto</h4>
            <a href="tel:+56947104876">+56 9 4710 4876</a>
            <a href="https://wa.me/56947104876" target="_blank" rel="noreferrer">
              WhatsApp directo
            </a>
          </div>

          <div>
            <h4>Horario</h4>
            <p>Lunes a viernes: 9:00 a 18:00</p>
            <p>Sábado: 9:00 a 14:00</p>
            <p>Domingo: cerrado</p>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="wrap footerBottomIn">
          <p>© 2026 Repuestos RICL</p>
          <a href="https://wa.me/56947104876" target="_blank" rel="noreferrer">
            Cotiza por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}