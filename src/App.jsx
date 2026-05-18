import Navbar from "./components/NavHeader/Navbar.jsx";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <HeroSlider />

      <main className="wrap">
        <section className="section" id="servicios">
          <div className="sectionTitle">
            <span className="eyebrow">Nuestros servicios</span>
            <h2>Lo que ofrecemos</h2>
            <p>Repuestos, asesoría y atención rápida para tu vehículo.</p>
          </div>

          <div className="grid">
            <article className="mini">
              <div className="ic">⚙️</div>
              <b>Repuestos</b>
              <span>Piezas para mantención, reemplazo y reparación.</span>
            </article>

            <article className="mini">
              <div className="ic">🛢️</div>
              <b>Aceites y lubricantes</b>
              <span>Opciones para distintos modelos y uso diario.</span>
            </article>

            <article className="mini">
              <div className="ic">🔋</div>
              <b>Baterías</b>
              <span>Productos confiables y listos para instalar.</span>
            </article>

            <article className="mini">
              <div className="ic">🧰</div>
              <b>Asesoría rápida</b>
              <span>Te ayudamos a elegir la pieza correcta.</span>
            </article>
          </div>
        </section>

        <section className="section" id="catalogo">
          <div className="sectionTitle">
            <span className="eyebrow">Catálogo destacado</span>
            <h2>Productos más consultados</h2>
            <p>Nuestros productos...</p>
          </div>

          <div className="grid">
            <article className="mini">
              <b>Filtros</b>
              <span>Motor, aceite, aire y cabina.</span>
            </article>

            <article className="mini">
              <b>Kit de embrague</b>
              <span>Soluciones para distintas necesidades.</span>
            </article>

            <article className="mini">
              <b>Tren delantero</b>
              <span>Suspensión, dirección y seguridad.</span>
            </article>

            <article className="mini">
              <b>Más opciones</b>
              <span>Consulta por WhatsApp y armamos tu pedido.</span>
            </article>
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="contactBox">
            <span className="eyebrow">Contacto directo</span>
            <h2>Cotiza rápido</h2>
            <p>Escríbenos por WhatsApp o llámanos para ayudarte a encontrar lo que necesitas.</p>

            <div className="contactMeta">
              <p><b>Correo:</b> repuestosricl@tudominio.cl</p>
              <p><b>Dirección:</b> La Concepción 603, Quillota, Región de Valparaíso, Chile</p>
            </div>

            <a
              className="btn btnGold"
              href="https://wa.me/56947104876"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: +56 9 4710 4876
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}