import "../styles/Home.css";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaStar, FaRegStar } from "react-icons/fa";
import { FiArrowRight, FiCheck, FiMapPin, FiMonitor, FiUsers, FiAward, FiShield, FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import office from "../assets/home/office.jpeg"
import victor from "../assets/home/victor.jpeg"
import pedro from "../assets/home/pedro.jpeg"

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

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="hero">
      <div className="heroBg" />
      <div className="heroContent">
        <span className="heroTag">Advocacia especializada</span>
        <h1 className="heroTitle">
          Soluções jurídicas com clareza e comprometimento
        </h1>
        <p className="heroSub">
          Assessoria jurídica personalizada para pessoas físicas e empresas.
          Atendimento presencial, online e híbrido em todo o Brasil.
        </p>
        <div className="heroActions">
          <a href="https://wa.me/551930200163" target="_blank" rel="noreferrer" className="btnPrimary">
            <FaWhatsapp /> Agendar consulta
          </a>
          <a href="#areas" className="btnOutline">
            Nossas áreas <FiArrowRight />
          </a>
        </div>
      </div>
      <div className="heroImage">
        <img src={office} alt="Escritório Pedro & Naidhig" className="heroImg" />
      </div>
    </section>
  );
}

/* ─── NOSSOS VALORES ─── */
/* ─── NOSSOS VALORES ─── */
function Valores() {
  const valores = [
    {
      title: "Transparência",
      desc: "Acreditamos que relações duradouras são construídas com transparência, confiança e comprometimento. Por isso, mantemos uma comunicação clara e contínua em todas as etapas, compartilhando informações sobre o andamento dos processos, honorários e estratégias adotadas. Nossos clientes têm acesso facilitado aos detalhes relevantes de seus casos, garantindo total acompanhamento, segurança e tranquilidade na tomada de decisões.",
    },
    {
      title: "Respeito aos clientes",
      desc: " Acreditamos que um atendimento de excelência começa pela compreensão das necessidades de cada cliente. Por isso, desenvolvemos estratégias personalizadas e oferecemos acompanhamento próximo em todas as etapas, construindo relações sólidas baseadas em confiança, respeito e comprometimento.",
    },
    {
      title: "Eficiência",
      desc: "Sabemos que o tempo dos nossos clientes é valioso. Por isso, aliamos tecnologia, estratégia e processos eficientes para tornar cada etapa mais ágil, organizada e precisa. Nossa atuação é focada em soluções objetivas e eficazes, buscando reduzir custos, otimizar processos e alcançar os melhores resultados para cada caso.",
    },
  ];

  const total = valores.length;
  const [index, setIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const sliderRef = useRef(null);

  const goTo = (i) => {
    setIndex(i);
    const slider = sliderRef.current;
    const slide = slider?.children[i];
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

  const next = () => goTo((index + 1) % total);
  const prev = () => goTo((index - 1 + total) % total);

  const handleScroll = () => {
    setShowHint(false);
    const slider = sliderRef.current;
    if (!slider) return;
    const newIndex = Math.round(slider.scrollLeft / slider.clientWidth);
    setIndex(newIndex);
  };

  return (
    <section className="section valoresSection" id="valores">
      <div className="container">
        <span className="sectionTag center">Nossos valores</span>
        <h2 className="sectionTitle center">O que guia o nosso trabalho</h2>

        <div className="valoresCarousel">
          <button
            className="carouselArrow carouselArrowLeft"
            onClick={prev}
            aria-label="Valor anterior"
          >
            <FiChevronLeft />
          </button>

          <div className="valoresTrack">
            <div
              className="valoresSlider"
              ref={sliderRef}
              onScroll={handleScroll}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {valores.map((v, i) => (
                <div className="valorSlide" key={i}>
                  <div className="valorCard">
                    <div className="valorLine" />
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {showHint && (
              <div className="swipeHint">
                <FiChevronRight /> Arraste para o lado
              </div>
            )}
          </div>

          <button
            className="carouselArrow carouselArrowRight"
            onClick={next}
            aria-label="Próximo valor"
          >
            <FiChevronRight />
          </button>
        </div>

        <div className="carouselDots">
          {valores.map((_, i) => (
            <button
              key={i}
              className={`carouselDot ${i === index ? "carouselDotActive" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para o valor ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── QUEM SOMOS ─── */
function QuemSomos() {
  return (
    <section className="section sobreSection" id="sobrenos">
      <div className="container sobreGrid">
        <div className="sobreFotos">
          <img src={pedro} alt="Dr. Pedro" className="sobreFoto1" />
          <img src={victor} alt="Dr. Naidhig" className="sobreFoto2" />
        </div>
        <div className="sobreTexto">
          <span className="sectionTag">Quem somos</span>
          <h2 className="sectionTitle">Pedro & Naidhig Advogados Associados</h2>
          <p>
            Somos um escritório fundado por dois advogados com mais de 12 anos de experiência
            combinada nas áreas de Direito Civil, Trabalhista e Empresarial. Nossa atuação é
            pautada pela ética, pela transparência e pelo compromisso real com o resultado de
            cada cliente.
          </p>
          <p>
            Acreditamos que o direito deve ser acessível e compreensível. Por isso, explicamos
            cada etapa do processo de forma clara e mantemos nossos clientes informados em
            cada decisão tomada.
          </p>
          <div className="sobreStats">
            <div className="stat">
              <strong>+500</strong>
              <span>casos atendidos</span>
            </div>
            <div className="stat">
              <strong>12+</strong>
              <span>anos de experiência</span>
            </div>
          </div>
          <a href="/sobrenos" className="btnPrimary" style={{ display: "inline-flex", marginTop: "1.5rem" }}>
            Conheça nossa história <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESSO DE ATENDIMENTO ─── */
function Processo() {
  const steps = [
    {
      num: "01",
      title: "Primeiro contato",
      desc: "Entre em contato via WhatsApp, e-mail ou formulário. Respondemos em até 24 horas e agendamos sua consulta inicial.",
    },
    {
      num: "02",
      title: "Consulta inicial",
      desc: "Reunião para entender seu caso em detalhes — presencial ou online. Sem julgamentos, com total sigilo e escuta ativa.",
    },
    {
      num: "03",
      title: "Análise jurídica",
      desc: "Avaliamos toda a documentação e elaboramos a melhor estratégia para o seu caso, com parecer claro e objetivo.",
    },
    {
      num: "04",
      title: "Acompanhamento",
      desc: "Você recebe atualizações regulares sobre o andamento do processo. Transparência total do início ao fim.",
    },
  ];
  return (
    <section className="section processoSection" id="processo">
      <div className="container">
        <span className="sectionTag center">Como funciona</span>
        <h2 className="sectionTitle center">Processo de atendimento</h2>
        <div className="processoGrid">
          {steps.map((s, i) => (
            <div className="processoCard" key={i}>
              <span className="processoNum">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < steps.length - 1 && <div className="processoArrow"><FiArrowRight /></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ONDE ATUAMOS ─── */
function Atuacao() {
  const modalidades = [
    {
      icon: <FiMapPin />,
      title: "Presencial",
      desc: "Atendimento em nosso escritório em [Cidade/SP]. Reuniões agendadas com horário flexível, incluindo sábados pela manhã.",
      tags: ["Campinas – SP", "Região"],
    },
    {
      icon: <FiMonitor />,
      title: "Online",
      desc: "Consultas e acompanhamento via videochamada para todo o Brasil. Mesma qualidade e sigilo do atendimento presencial.",
      tags: ["Todo o Brasil", "Videoconferência", "WhatsApp"],
    },
    {
      icon: <FiUsers />,
      title: "Híbrido",
      desc: "Combinamos o melhor dos dois formatos. Primeira consulta online e audiências/atos processuais presenciais quando necessário.",
      tags: ["Flexível", "Personalizado"],
    },
  ];
  return (
    <section className="section atuacaoSection" id="atuacao">
      <div className="container">
        <span className="sectionTag center">Onde atuamos</span>
        <h2 className="sectionTitle center">Estamos onde você estiver</h2>
        <div className="atuacaoGrid">
          {modalidades.map((m, i) => (
            <div className="atuacaoCard" key={i}>
              <div className="atuacaoIcon">{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <div className="atuacaoTags">
                {m.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        
<div className="mapaWrapper">
  <iframe
    title="Localização Pedro e Naidhig"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14700.44219358729!2d-47.045354!3d-22.909293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf3962ce0edf%3A0xb8b7ad9b96519d2!2sRua%20Bar%C3%A3o%20de%20Paranapanema%2C%20146%20-%20Vila%20Jequitibas%2C%20Campinas%20-%20SP%2C%2013026-010%2C%20Brazil!5e0!3m2!1sen!2sus!4v1779891751414!5m2!1sen!2sus"
    width="100%"
    height="400"
    style={{ border: 0, display: "block" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
  <div className="mapaEndereco">
    <FiMapPin />
    <div>
      <strong>Rua Barão de Paranapanema, 146</strong>
      <span>Sala 62, Bloco C – Vila dos Jequitibás</span>
      <span>Campinas/SP – CEP 13026-010</span>
    </div>
  </div>
</div>
        </div>
    </section>
  );
}

/* ─── DIFERENCIAIS ─── */
function Diferenciais() {
  const items = [
    { icon: <FiAward />, title: "Experiência comprovada", desc: "Mais de uma década de atuação com histórico sólido de resultados em diversas áreas do direito." },
    { icon: <FiClock />, title: "Agilidade e prazo", desc: "Processos organizados, prazos respeitados e comunicação proativa para que você nunca seja pego de surpresa." },
    { icon: <FiMonitor />, title: "Atendimento online", desc: "Tecnologia a favor do cliente: consultas e assinatura de documentos 100% digitais quando necessário." },
    { icon: <FiShield />, title: "Transparência total", desc: "Você sabe exatamente o que está acontecendo com o seu caso. Relatórios periódicos e respostas rápidas." },
    { icon: <FiCheck />, title: "Atendimento humanizado", desc: "Cada caso é tratado de forma única. Ouvimos antes de agir e priorizamos soluções que fazem sentido para você." },
    { icon: <FiUsers />, title: "Equipe multidisciplinar", desc: "Advogados especializados em diferentes ramos trabalhando em conjunto para oferecer a melhor estratégia." },
  ];
  return (
    <section className="section diferenciaisSection" id="diferenciais">
      <div className="container">
        <span className="sectionTag center">Por que nos escolher</span>
        <h2 className="sectionTitle center">Nossos diferenciais</h2>
        <div className="diferenciaisGrid">
          {items.map((d, i) => (
            <div className="diferencialCard" key={i}>
              <div className="diferencialIcon">{d.icon}</div>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DEPOIMENTOS ─── */
function Depoimentos() {
  const reviews = [
    {
      name: "Augusto G.",
      text: "Profissionais atenciosos, cuidaram do meu caso, que já havia passado por três escritórios sem resolução. Ganharam um cliente!!",
      stars: 5,
    },
    {
      name: "Ronaldo R.",
      text: "Cuidaram cuidadosamente do processo, cada etapa importante nos notificou, foram solícitos, orientaram em cada etapa corretamente e obtivemos êxito. Estamos muito gratos.",
      stars: 5,
    },
    {
      name: "Natalia  Q.",
      text: "Tive um processo contra o banco e fui atendida pelo Victor Naidhig, que foi extremamente atencioso durante todo o processo. Conseguiu resolver a questão de forma rápida e eficiente, sempre com muita atenção e profissionalismo. Fiquei muito satisfeita com o atendimento e super recomendo!.",
      stars: 5,
    },
    {
      name: "Maycon R.",
      text: "Excelente atendimento do início ao fim.O escritório conduziu todo o processo de inventário com muito profissionalismo, transparência e agilidade, sempre esclarecendo minhas dúvidas.Recomendo pelos serviços prestados e pelo comprometimento de toda a equipe.",
      stars: 5,
    },
  ];

  const total = reviews.length;
  const [index, setIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const sliderRef = useRef(null);

  const goTo = (i) => {
    setIndex(i);
    const slider = sliderRef.current;
    const slide = slider?.children[i];
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

  const handleScroll = () => {
    setShowHint(false);
    const slider = sliderRef.current;
    if (!slider) return;
    const newIndex = Math.round(slider.scrollLeft / slider.clientWidth);
    setIndex(newIndex);
  };

  return (
    <section className="section depoimentosSection" id="depoimentos">
      <div className="container">
        <span className="sectionTag center">Depoimentos</span>
        <h2 className="sectionTitle center">O que dizem nossos clientes</h2>

        <div className="depoimentosTrack">
          <div
            className="depoimentosGrid"
            ref={sliderRef}
            onScroll={handleScroll}
          >
            {reviews.map((r, i) => (
              <div className="depoimentoSlide" key={i}>
                <div className="depoimentoCard">
                  <div className="stars">
                    {[...Array(5)].map((_, s) =>
                      s < r.stars ? <FaStar key={s} className="starFill" /> : <FaRegStar key={s} />
                    )}
                  </div>
                  <p className="depoimentoText">"{r.text}"</p>
                  <div className="depoimentoAuthor">
                    <div className="avatarCircle">{r.name.charAt(0)}</div>
                    <div>
                      <strong>{r.name}</strong>
                      <span>{r.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showHint && (
            <div className="swipeHint">
              <FiChevronRight /> Arraste para o lado
            </div>
          )}
        </div>

        <div className="carouselDots depoimentosDots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`carouselDot ${i === index ? "carouselDotActive" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para o depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
/* ─── CTA ─── */
function CTA() {
  const [lgpd, setLgpd] = useState(false);

  return (
    <section className="ctaSection" id="contato">
      <div className="container ctaGrid">
        <div className="ctaTexto">
          <span className="sectionTag">Fale conosco</span>
          <h2 className="sectionTitle">Pronto para resolver sua situação jurídica?</h2>
          <p>
            Agende uma consulta agora. Atendemos de forma presencial, online ou híbrida.
            Nossa equipe está pronta para ouvir e encontrar a melhor solução para o seu caso.
          </p>
          <a
            href="https://wa.me/551930200163"
            target="_blank"
            rel="noreferrer"
            className="btnPrimary btnLarge"
          >
            <FaWhatsapp /> Falar pelo WhatsApp agora
          </a>
        </div>

        <div className="ctaForm">
          <h3>Ou envie uma mensagem</h3>
          <div className="formGroup">
            <label>Nome completo</label>
            <input type="text" placeholder="Seu nome" />
          </div>
          <div className="formGroup">
            <label>Telefone / WhatsApp</label>
            <input type="tel" placeholder="(19) 99999-9999" />
          </div>
          <div className="formGroup">
            <label>Área de interesse</label>
            <select>
              <option value="">Selecione uma área</option>
              <option>Direito Trabalhista</option>
              <option>Direito Civil</option>
              <option>Direito Imobiliário</option>
              <option>Direito Societário</option>
              <option>Direito Digital</option>
              <option>Direito Ambiental</option>
            </select>
          </div>
          <div className="formGroup">
            <label>Mensagem</label>
            <textarea rows={4} placeholder="Descreva brevemente sua situação..." />
          </div>

          {/* ── LGPD ── */}
          <div className="lgpdBox">
            <label className="lgpdLabel">
              <input
                type="checkbox"
                checked={lgpd}
                onChange={(e) => setLgpd(e.target.checked)}
                className="lgpdCheck"
              />
              <span>
                Li e concordo com a{" "}
                <a href="/privacidade" target="_blank" rel="noreferrer">
                  Política de Privacidade
                </a>
                . Autorizo o uso dos meus dados para fins de contato e atendimento
                jurídico, conforme a{" "}
                <strong>LGPD (Lei nº 13.709/2018)</strong>.
              </span>
            </label>
          </div>

          <button
            className="btnPrimary"
            style={{
              width: "100%",
              justifyContent: "center",
              opacity: lgpd ? 1 : 0.5,
              cursor: lgpd ? "pointer" : "not-allowed",
            }}
            disabled={!lgpd}
          >
            Enviar mensagem <FiArrowRight />
          </button>

          <p className="lgpdNote">
            Seus dados são tratados com sigilo e segurança.
          </p>
        </div>
      </div>
    </section>
  );
}



/* ─── HOME PAGE ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <Valores />
      <QuemSomos />
      <Processo />
      <Atuacao />
      <Diferenciais />
      <Depoimentos />
      <CTA />
      <FloatingWhatsApp />
    </>
  );
}