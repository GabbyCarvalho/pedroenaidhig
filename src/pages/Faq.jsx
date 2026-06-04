import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/Faq.css";

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

const faqData = [
  {
    category: "Consulta e Atendimento",
    items: [
      {
        q: "Como funciona a primeira consulta?",
        a: "A primeira consulta é o momento em que você nos conta sua situação com total sigilo e liberdade. Ela pode ser feita de forma presencial em nosso escritório em Campinas, por videochamada ou até pelo WhatsApp, conforme sua preferência. Nessa conversa, escutamos atentamente, fazemos as perguntas necessárias e apresentamos um panorama inicial sobre o seu caso — sem compromisso e sem burocracia.",
      },
      {
        q: "Vocês atendem online? Como funciona?",
        a: "Sim! Atendemos clientes em todo o Brasil de forma 100% online. As consultas são realizadas por videochamada (Google Meet, Zoom ou WhatsApp), e toda a documentação pode ser enviada digitalmente. Para assinar contratos, utilizamos plataformas de assinatura eletrônica com validade jurídica.",
      },
      {
        q: "Qual é o prazo para receber um retorno após o contato?",
        a: "Respondemos a todos os contatos em até 24 horas úteis. Para casos urgentes, recomendamos acionar diretamente pelo WhatsApp, onde o tempo de resposta costuma ser menor.",
      },
      {
        q: "Preciso levar documentos na primeira consulta?",
        a: "Não é obrigatório, mas se você tiver documentos relacionados ao seu caso (contratos, notificações, comprovantes, decisões judiciais), trazê-los ou enviá-los com antecedência pode tornar a análise mais rápida e completa. Caso não os tenha no momento, orientamos sobre o que reunir posteriormente.",
      },
    ],
  },
  {
    category: "Honorários e Pagamento",
    items: [
      {
        q: "Como são calculados os honorários advocatícios?",
        a: "Os honorários variam de acordo com a complexidade do caso, o tempo estimado de trabalho e a modalidade de atuação (consultiva, extrajudicial ou judicial). Após a consulta inicial e a análise do seu caso, apresentamos uma proposta clara e transparente, sem surpresas. Trabalhamos com diferentes formas de cobrança: valor fixo, por hora ou percentual sobre o êxito.",
      },
      {
        q: "A consulta inicial é paga?",
        a: "Realizamos uma triagem inicial gratuita para entender brevemente o seu caso e verificar se nossa atuação é adequada à sua necessidade. A consulta detalhada, com análise jurídica aprofundada, é cobrada conforme tabela — valor que será informado previamente.",
      },
      {
        q: "Quais formas de pagamento são aceitas?",
        a: "Aceitamos PIX, transferência bancária, cartão de crédito e boleto. Para processos de longa duração, oferecemos parcelamento — as condições são definidas em contrato, de forma clara e sem encargos abusivos.",
      },
      {
        q: "O que é honorários de êxito?",
        a: "É uma modalidade em que parte dos honorários é paga apenas se o resultado for favorável ao cliente. Nem todos os casos comportam essa modalidade, mas sempre que viável, analisamos essa possibilidade para facilitar o acesso ao serviço jurídico.",
      },
    ],
  },
  {
    category: "Áreas de Atuação",
    items: [
      {
        q: "Quais áreas do direito vocês atendem?",
        a: "Atuamos nas áreas de Direito Civil, Direito Trabalhista, Direito Imobiliário, Direito Societário, Direito Digital e Direito Ambiental. Para cada área, contamos com advogados especializados, garantindo uma estratégia adequada às particularidades do seu caso.",
      },
      {
        q: "Vocês atendem empresas e pessoas físicas?",
        a: "Sim, atendemos tanto pessoas físicas quanto jurídicas. Para empresas, oferecemos também assessoria jurídica preventiva e continuada, atuando como consultores estratégicos para evitar litígios e manter a conformidade legal.",
      },
      {
        q: "Atendem casos de herança e inventário?",
        a: "Sim, casos envolvendo herança, inventário, partilha de bens e testamento estão dentro do nosso escopo de atuação em Direito Civil. Podemos conduzir inventários extrajudiciais (em cartório) e judiciais, orientando toda a família durante o processo.",
      },
      {
        q: "Posso contratar vocês para rever um contrato antes de assinar?",
        a: "Com certeza. A análise prévia de contratos é um dos serviços mais importantes que prestamos. Identificar cláusulas abusivas, ambíguas ou prejudiciais antes da assinatura pode evitar problemas sérios no futuro. É uma das formas mais eficazes de proteção jurídica.",
      },
    ],
  },
  {
    category: "Processos e Andamento",
    items: [
      {
        q: "Como vou acompanhar o andamento do meu processo?",
        a: "Mantemos nossos clientes informados por WhatsApp e e-mail sempre que houver movimentações relevantes. Também enviamos relatórios periódicos com o resumo do andamento. Você nunca ficará no escuro sobre o que está acontecendo com o seu caso.",
      },
      {
        q: "Quanto tempo leva um processo judicial?",
        a: "O tempo varia muito dependendo da área, da comarca, do grau de contestação e da complexidade do caso. Processos trabalhistas costumam ser mais ágeis; ações civis podem levar de meses a anos. Ao analisarmos o seu caso, damos uma estimativa realista de prazo — sem promessas irreais.",
      },
      {
        q: "É possível resolver meu caso sem ir a juízo?",
        a: "Sempre que possível, buscamos soluções extrajudiciais: acordos, mediação e negociações diretas. Essas alternativas costumam ser mais rápidas, menos custosas e igualmente eficazes. O ingresso com ação judicial é recomendado quando não há outra saída ou quando é claramente a melhor estratégia.",
      },
      {
        q: "Vocês atuam em outras cidades além de Campinas?",
        a: "Sim. Além do atendimento online para todo o Brasil, podemos atuar judicialmente em diversas comarcas do estado de São Paulo e, em casos específicos, em âmbito nacional através de parcerias com advogados correspondentes.",
      },
    ],
  },
];

/* ─── FAQ ITEM — accordion com altura real via ref ─── */
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  return (
    <div className={`faqItem ${open ? "faqItemOpen" : ""}`}>
      <button className="faqQuestion" onClick={() => setOpen((v) => !v)}>
        <span>{question}</span>
        <FiChevronDown className="faqChevron" />
      </button>

      <div
        className="faqAnswerWrapper"
        style={{
          height: open ? (bodyRef.current?.scrollHeight ?? "auto") : 0,
          overflow: "hidden",
          transition: "height 0.35s ease",
        }}
      >
        <div className="faqAnswerBody" ref={bodyRef}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

function FaqCategory({ category, items }) {
  return (
    <div className="faqCategory">
      <h3 className="faqCategoryTitle">{category}</h3>
      <div className="faqList">
        {items.map((item, i) => (
          <FaqItem key={i} question={item.q} answer={item.a} />
        ))}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="faqHero">
        <div className="faqHeroBg" />
        <div className="faqHeroContent">
          <span className="heroTag">Dúvidas frequentes</span>
          <h1 className="faqHeroTitle">Perguntas Frequentes</h1>
          <p className="faqHeroSub">
            Reunimos as dúvidas mais comuns dos nossos clientes. Não encontrou o que procurava?
            Entre em contato — respondemos em até 24 horas.
          </p>
        </div>
      </section>

      {/* ── CONTEÚDO FAQ ── */}
      <section className="section faqSection">
        <div className="container faqContainer">
          <div className="faqContent">
            {faqData.map((cat, i) => (
              <FaqCategory key={i} category={cat.category} items={cat.items} />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="faqSidebar">
            <div className="faqSideCard">
              <h3>Não encontrou sua dúvida?</h3>
              <p>
                Fale diretamente com um de nossos advogados. Atendimento rápido,
                sigiloso e sem compromisso.
              </p>
              <a
                href="https://wa.me/SEUNUMERO"
                target="_blank"
                rel="noreferrer"
                className="btnPrimary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <FaWhatsapp /> Falar pelo WhatsApp
              </a>
              <a
                href="/contato"
                className="btnOutline"
                style={{ width: "100%", justifyContent: "center", marginTop: "0.75rem" }}
              >
                Enviar mensagem <FiArrowRight />
              </a>
            </div>

            <div className="faqSideCard faqSideCardLight">
              <h3>Atendimento</h3>
              <ul className="faqSideList">
                <li><strong>Segunda a sexta</strong><span>08h – 18h</span></li>
                {/* <li><strong>Sábados</strong><span>08h – 12h</span></li> */}
                <li><strong>Online</strong><span>Todo o Brasil</span></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="faqCtaBanner">
        <div className="container faqCtaInner">
          <h2>Pronto para resolver sua questão jurídica?</h2>
          <p>Consulta inicial rápida e sem burocracia. Presencial ou online.</p>
          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noreferrer"
            className="btnPrimary btnLarge"
          >
            <FaWhatsapp /> Agendar consulta agora
          </a>
        </div>
      </section>

      <FloatingWhatsApp />
    </>
  );
}