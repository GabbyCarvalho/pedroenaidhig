import "../styles/Areas.css";

// ── IMPORTE SUAS FOTOS AQUI ──
import fotoFamilia from "../assets/areas/familia.jpg";
import fotoSuccessorio from "../assets/areas/sucessorio.jpg";
import fotoCivil from "../assets/areas/civil.jpg";
import fotoImobiliario from "../assets/areas/imobiliario.jpg";
import fotoSaude from "../assets/areas/saude.jpg";
import fotoDpo from "../assets/areas/data.jpg"


import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

/* ─── DADOS DAS ÁREAS ─── */
const areas = [
  {
    slug: "familia",
    titulo: "Direito de Família",
    resumo: "Divórcio, guarda, regulamentação de visitas, alimentos, reconhecimento de paternidade e dissolução de união estável.",
    foto: fotoFamilia,
  },
  {
    slug: "sucessorio",
    titulo: "Direito Sucessório",
    resumo: "Inventário judicial e extrajudicial, testamentos, planejamento sucessório e partilha de bens.",
    foto: fotoSuccessorio,
  },
  {
    slug: "civil",
    titulo: "Direito Civil e Contratual",
    resumo: "Elaboração e revisão de contratos, responsabilidade civil, indenizações e obrigações em geral.",
    foto: fotoCivil,
  },
  {
    slug: "imobiliario",
    titulo: "Direito Imobiliário e Condominial",
    resumo: "Compra, venda, locação, distrato, usucapião, regularização de imóveis e questões condominiais.",
    foto: fotoImobiliario,
  },
  {
    slug: "saude",
    titulo: "Direito Médico e da Saúde",
    resumo: "Erros médicos, planos de saúde, internação compulsória, responsabilidade de hospitais e demandas por medicamentos.",
    foto: fotoSaude,
  },
  {
    slug: "dpo",
    titulo: "DPO as a Service",
    resumo: "Encarregado de Proteção de Dados terceirizado: adequação à LGPD, políticas de privacidade, treinamentos e gestão de incidentes.",
    foto: fotoDpo,
  },
];

/* ─── FLOATING WHATSAPP BUTTON ─── */
function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="https://wa.me/SEUNUMERO"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar pelo WhatsApp"
      className={`floatingWa ${visible ? "floatingWaVisible" : ""}`}
    >
      <FaWhatsapp />
      <span>Fale conosco</span>
    </a>
  );
}

/* ─── CARD ─── */
function AreaCard({ area }) {
  return (
    <a href={`/areas/${area.slug}`} className="areaCard">
      <div className="areaCardImgWrap">
        {area.foto ? (
          <img src={area.foto} alt={area.titulo} className="areaCardImg" />
        ) : (
          <div className="areaCardImgPlaceholder">
            <span>{area.titulo}</span>
          </div>
        )}
        <div className="areaCardOverlay" />
        <h3 className="areaCardTitulo">{area.titulo}</h3>
      </div>
      <div className="areaCardBody">
        <p className="areaCardResumo">{area.resumo}</p>
        <span className="areaCardCta">
          Saiba mais <FiArrowRight />
        </span>
      </div>
    </a>
  );
}

/* ─── INTRO ─── */
function IntroAreas() {
  return (
    <section className="areasIntro">
      <div className="areasIntroBg" />
      <div className="container areasIntroInner">
        <span className="sectionTag">Áreas de Atuação</span>
        <h1 className="areasIntroTitle">
          Especialização jurídica em cada frente que importa para você
        </h1>
        <p className="areasIntroSub">
          Nossa equipe atua de forma integrada em múltiplas áreas do direito,
          oferecendo soluções sob medida para pessoas físicas e jurídicas.
          Cada caso é tratado com dedicação, estratégia e total transparência.
        </p>
        <div className="areasIntroActions">
          <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noreferrer" className="btnPrimary">
            <FaWhatsapp /> Consulta gratuita
          </a>
          <a href="#areas" className="btnOutline">
            Ver todas as áreas <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── GRADE DE ÁREAS ─── */
function AreasGrid() {
  return (
    <section className="areasGridSection" id="areas">
      <div className="container">
        <div className="areasGrid">
          {areas.map((a) => (
            <AreaCard key={a.slug} area={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ─── */
function AreasCTA() {
  return (
    <section className="areasCTA">
      <div className="container areasCTAInner">
        <div>
          <h2 className="sectionTitle" style={{ color: "var(--light2)", marginBottom: "0.5rem" }}>
            Não encontrou a área que procura?
          </h2>
          <p style={{ color: "rgba(237,237,232,0.72)", fontFamily: "var(--fonte-textos)", fontSize: "1rem" }}>
            Entre em contato. Nossa equipe avalia seu caso e indica o melhor caminho.
          </p>
        </div>
        <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noreferrer" className="btnPrimary btnLarge">
          <FaWhatsapp /> Falar com um advogado
        </a>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function AreasAtuacao() {
  return (
    <>
      <FloatingWhatsApp />
      <IntroAreas />
      <AreasGrid />
      <AreasCTA />
    </>
  );
}