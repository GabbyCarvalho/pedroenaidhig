import "../styles/SobreNos.css";

import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import victor from "../assets/sobrenos/victor.webp";
import rafael from "../assets/sobrenos/Rafael.webp";

const advogados = [
  {
    nome: "Victor Naidhig",
    foto: victor,
    lado: "direita",
    oab: "OAB/SP 330.578",
    descricao: [
      "Advogado formado pela PUC Campinas em 2012, com mais de 12 anos de experiência na área da saúde e digital voltado para a área da saúde, além de família e sucessões.",
      "Possui especialização em Direito Civil pela PUC Minas e em Direito Digital pela PUC Campinas, além de certificação como DPO pelo Exin. Durante sua trajetória profissional, participou ativamente em processos envolvendo planos de saúde e solucionou inúmeros casos em matéria de família e sucessões.",
      "Atuou também no desenvolvimento de projetos de adequação à LGPD para planos de saúde, Condomínios e Clínicas Médicas, combinando conhecimento jurídico tradicional com expertise prática.",
    ],
    areas: ["Direito Civil", "Direito Digital", "Família e Sucessões", "LGPD"],
  },
  {
    nome: "Rafael Henrique Pedro",
    foto: rafael,
    lado: "esquerda",
    oab: "OAB/SP 000.000",
    descricao: [
      "Advogado formado em Direito pela PUC Campinas e pós-graduado em Direito Imobiliário pela Escola Superior de Advocacia (ESA).",
      "Com uma trajetória sólida e marcada pela excelência, oferece atendimento consultivo de alto nível para síndicos e administradoras de condomínio, aliado a uma experiência prática que poucos profissionais possuem: ao longo de sua carreira, atuou também como síndico profissional.",
      "Essa vivência garante um entendimento profundo dos desafios do dia a dia condominial e a capacidade de orientar clientes com autoridade tanto no aspecto teórico quanto prático. No campo de Família e Sucessões, Rafael se destaca pela resolução bem-sucedida de inúmeros casos.",
    ],
    areas: ["Direito Imobiliário", "Direito Condominial", "Família e Sucessões"],
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

function AdvogadoCard({ advogado }) {
  const { nome, foto, lado, oab, descricao, areas } = advogado;
  const fotoEsquerda = lado === "esquerda";

  return (
    <div className={`advCard ${fotoEsquerda ? "advCardReverse" : ""}`}>
      <div className="advFotoWrapper">
        <img src={foto} alt={nome} className="advFoto" />
      </div>
      <div className="advTexto">
        <span className="advOab">{oab}</span>
        <h2 className="advNome">{nome}</h2>
        <div className="advDivisor" />
        {descricao.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="advAreas">
          {areas.map((a) => (
            <span key={a} className="advAreaTag">{a}</span>
          ))}
        </div>
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noreferrer"
          className="btnPrimary"
          style={{ display: "inline-flex", marginTop: "1.5rem", justifyContent: "center"}}
        >
          <FaWhatsapp /> Agendar consulta
        </a>
      </div>
    </div>
  );
}

export default function SobreNos() {
  return (
    <>
      {/* ── HERO QUEM SOMOS ── */}
      <section className="sobreHero">
        <div className="sobreHeroContent">
          <span className="sectionTag">Quem somos</span>
          <h1 className="sobreHeroTitle">
            Experiência, dedicação e soluções jurídicas personalizadas
          </h1>
          <p className="sobreHeroSub">
           Nascida de uma longa relação de amizade e trabalhos realizados pelos sócios 
           fundadores e após colherem vasta experiencia de mercado, nasce a Pedro&Naidhig 
           Sociedade de Advogados, comprometida desde sua fundação com a excelência jurídica 
           e dedicada a oferecer a seus clientes soluções legais eficientes e personalizadas.
          </p>
          <p className="sobreHeroSub">
          Com equipe multidisciplinar de profissionais altamente qualificados trabalha incansavelmente
           para defender os interesses de nossos clientes, sempre pautados pelos mais elevados padrões éticos, 
           técnicos e comprometida com entregar sempre eficiência e transparência.
          </p>
        </div>
        <div className="sobreHeroImagem">
          {/* troque por uma imagem decorativa se quiser */}
          <div className="imgPlaceholder sobreHeroImg">
            <span>Foto decorativa / escritório</span>
          </div>
        </div>
      </section>

      {/* ── ADVOGADOS ── */}
      <section className="advSection">
        <div className="advContainer">
          <span className="sectionTag center">Nossa equipe</span>
          <h2 className="sectionTitle center">Conheça os advogados</h2>
          <div className="advList">
            {advogados.map((adv) => (
              <AdvogadoCard key={adv.nome} advogado={adv} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="valoresSection">
        <div className="advContainer">
          <span className="sectionTag center">Nossos valores</span>
          <h2 className="sectionTitle center">O que nos guia todos os dias</h2>
          <div className="valoresGrid">
            {[
              { titulo: "Ética", desc: "Atuação pautada na integridade, transparência e responsabilidade." },
              { titulo: "Compromisso", desc: "Dedicação total aos objetivos e à defesa dos direitos dos nossos clientes." },
              { titulo: "Excelência", desc: "Buscamos constantemente conhecimento para entregar soluções jurídicas eficazes." },
              { titulo: "Confiança", desc: "Construímos relações sólidas baseadas no respeito e na confiança." },
            ].map((v) => (
              <div key={v.titulo} className="valorCard">
                <div className="valorDivisor" />
                <h3>{v.titulo}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sobreCtaSection">
        <div className="advContainer sobreCtaGrid">
          <div>
            <h2 className="sectionTitle">Pronto para falar com nossa equipe?</h2>
            <p>Entre em contato e agende sua consulta. Atendemos de forma presencial, online ou híbrida.</p>
          </div>
          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noreferrer"
            className="btnPrimary btnLarge"
          >
            <FaWhatsapp /> Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}