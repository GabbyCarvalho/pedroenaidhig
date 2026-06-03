import "../styles/Home.css";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaStar, FaRegStar } from "react-icons/fa";
import { FiArrowRight, FiCheck, FiMapPin, FiMonitor, FiUsers, FiAward, FiShield, FiClock } from "react-icons/fi";

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
          <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noreferrer" className="btnPrimary">
            <FaWhatsapp /> Agendar consulta
          </a>
          <a href="#areas" className="btnOutline">
            Nossas áreas <FiArrowRight />
          </a>
        </div>
      </div>
      <div className="heroImage">
        {/* Placeholder de foto — substitua pela imagem real */}
        <div className="imgPlaceholder heroImg">
          <span>Foto do escritório</span>
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
          <div className="imgPlaceholder sobreFoto1"><span>Foto Dr. Pedro</span></div>
          <div className="imgPlaceholder sobreFoto2"><span>Foto Dr. Naidhig</span></div>
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
      name: "Ana Carolina S.",
      role: "Cliente – Direito Trabalhista",
      text: "Fui muito bem atendida desde o primeiro contato. Eles explicaram tudo com clareza e conseguimos um resultado excelente na minha causa. Recomendo sem hesitar.",
      stars: 5,
    },
    {
      name: "Marcos Oliveira",
      role: "Cliente – Direito Civil",
      text: "O atendimento online foi incrível, consegui resolver tudo sem sair de casa. Profissionais extremamente competentes e sempre disponíveis para tirar dúvidas.",
      stars: 5,
    },
    {
      name: "Fernanda R.",
      role: "Empresária – Direito Societário",
      text: "Contratei para assessoria da minha empresa e o suporte foi fundamental. Organização, agilidade e muita transparência durante todo o processo.",
      stars: 5,
    },
  ];
  return (
    <section className="section depoimentosSection" id="depoimentos">
      <div className="container">
        <span className="sectionTag center">Depoimentos</span>
        <h2 className="sectionTitle center">O que dizem nossos clientes</h2>
        <div className="depoimentosGrid">
          {reviews.map((r, i) => (
            <div className="depoimentoCard" key={i}>
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
            href="https://wa.me/SEUNUMERO"
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