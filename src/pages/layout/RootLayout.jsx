import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../../assets/logo.webp"; 
import ScroolToTop from "../../components/ScrollToTop"

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <ScroolToTop />
      {/* ── HEADER ── */}
      <header className="header">
        <div className="topBar">
          <nav className="navbar">

            {/* LOGO */}
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src={logo} alt="Pedro e Naidhig" className="logo" />
            </Link>

            {/* NAV LINKS — desktop */}
            <div className={`navLinks ${menuOpen ? "open" : ""}`}>
              <Link to="/" onClick={closeMenu}>Início</Link>
              <Link to="/sobrenos" onClick={closeMenu}>Quem Somos</Link>
              <Link to="/areas" onClick={closeMenu}>Áreas de Atuação</Link>
              <Link to="/blog" onClick={closeMenu}>Blog</Link>
               <Link to="/faq" onClick={closeMenu}>FAQ</Link>
              <Link to="/contato" onClick={closeMenu}>Contato</Link>
            </div>

            {/* SOCIAL ICONS — direita */}
            <div className="navSocials">
              <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="mailto:contato@pedroenaidhig.adv.br" aria-label="Email">
                <FiMail />
              </a>
              <a href="https://www.instagram.com/SEUINSTAGRAM" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="https://www.linkedin.com/in/SEULINKEDIN" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
              </a>

            </div>

            {/* HAMBURGER — mobile */}
            <button
              className={`hamburger ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </nav>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="mainContent">
        <Outlet />
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footerContainer">

          {/* Coluna 1 — Logo + copyright */}
          <div className="footerCol">
            <img src={logo} alt="Pedro e Naidhig" className="footerLogo" />
            <p className="footerCopy">
              © 2026 Pedro & Naidhig Advogados Associados.<br />
              Todos os direitos reservados.
            </p>
          </div>

          {/* Coluna 2 — Navegação */}
          <div className="footerCol">
            <h3 className="footerTitle">Navegação</h3>
            <Link to="/">Início</Link>
            <Link to="/sobrenos">Quem Somos</Link>
            <Link to="/areas">Áreas de Atuação</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contato">Contato</Link>
             <Link to="/privacidade">Política de Privacidade</Link>
          </div>

          {/* Coluna 3 — Áreas de Atuação */}
          <div className="footerCol">
            <h3 className="footerTitle">Áreas de Atuação</h3>
            <Link to="/areas">Direito Trabalhista</Link>
            <Link to="/areas">Direito Imobiliário</Link>
            <Link to="/areas">Direito Civil</Link>
            <Link to="/areas">Direito Societário</Link>
            <Link to="/areas">Direito Digital</Link>
            <Link to="/areas">Direito Ambiental</Link>
          </div>

          {/* Coluna 4 — Contato */}
          <div className="footerCol">
            <h3 className="footerTitle">Contato</h3>
            <div className="footerContact">
              <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noreferrer">
                <FaWhatsapp /> (19) 98999-9999
              </a>
              <a href="mailto:contato@pedroenaidhig.adv.br">
                <FiMail /> contato@pedroenaidhig.adv.br
              </a>
              <a href="https://www.instagram.com/SEUINSTAGRAM" target="_blank" rel="noreferrer">
                <FaInstagram /> Instagram
              </a>
              <a href="https://www.linkedin.com/in/SEULINKEDIN" target="_blank" rel="noreferrer">
                <FaLinkedinIn /> LinkedIn
              </a>
              
            </div>
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noreferrer"
              className="footerWhatsappBtn"
            >
              <FaWhatsapp /> Fale conosco pelo WhatsApp
            </a>
          </div>

        </div>
      </footer>
    </>
  );
}