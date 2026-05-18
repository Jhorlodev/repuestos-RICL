import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setClosing(true);
        setTimeout(() => {
          setOpen(false);
          setClosing(false);
        }, 220);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const openMenu = (e) => {
    e.stopPropagation();
    if (!open) {
      setOpen(true);
      setClosing(false);
    }
  };

  const closeMenu = (e) => {
    e.stopPropagation();
    if (open) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 220);
    }
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (open) closeMenu(e);
    else openMenu(e);
  };

  return (
    <header className="nav">
      <div className="wrap navIn">
        <div className="brand">
          <div className="brandLogo">
            <img src={Logo} alt="Logo" className="logonav" />
          </div>

          <div className="brandText">
            <span>REPUESTOS</span>
            <strong>RICL</strong>
          </div>
        </div>

        <button
          className={`menuBtn ${open ? "active" : ""} ${closing ? "closing" : ""}`}
          onClick={toggleMenu}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {open && <div className="menuOverlay" onClick={closeMenu} />}

        <nav
          ref={menuRef}
          className={`links ${open ? "open" : ""} ${closing ? "closing" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#catalogo" onClick={closeMenu}>Catálogo</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>
      </div>
    </header>
  );
}