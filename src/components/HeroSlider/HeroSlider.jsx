import { useEffect, useState } from "react";
import "./HeroSlider.css";
import slide1 from "../../assets/Slide1.jpg";
import slide2 from "../../assets/Slide2.jpg";
import slide3 from "../../assets/Slide3.jpg";

const slides = [
  {
    image: slide1,
    title: "Repuestos Chevrolet",
    text: "Filtros, aceites, baterías y piezas para el día a día.",
  },
  {
    image: slide2,
    title: "Calidad y confianza",
    text: "Productos seleccionados para brindar seguridad y rendimiento.",
  },
  {
    image: slide3,
    title: "Atención rápida",
    text: "Cotiza por WhatsApp y recibe respuesta en poco tiempo.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="heroSlider" id="inicio">
      <div className="wrap sliderGrid">
        <div className="sliderCopy">
          <div className="heroBadge">Calidad · Confianza · Buen precio</div>
          <h1>
            Repuestos para
            <span>Chevrolet</span>
          </h1>
          <p>
            En repuesto RICL nos dedicamos a ofrecer repuestos de calidad con atencion, rapida, confiable y certera. <br/>
            <small>tu solucion en respuestos en un solo lugar </small>
          </p>

          <div className="sliderActions">
            <a className="btn btnGold" href="https://wa.me/56912345678" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btnDark" href="#catalogo">
              Ver catálogo
            </a>
          </div>
        </div>

        <div className="sliderCard">
          <img src={slides[index].image} alt={slides[index].title} />
          <div className="sliderOverlay">
            <h3>{slides[index].title}</h3>
            <p>{slides[index].text}</p>
          </div>

          <div className="dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={i === index ? "dot active" : "dot"}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}