import "../../styles/AreaDetalhe.css";
import { FiClipboard, FiEdit, FiAlertTriangle, FiDollarSign } from "react-icons/fi";
import { FaWhatsapp as FaWhatsappIcon } from "react-icons/fa";



const sections = [
  {
    icon: <FiClipboard />,
    title: "Elaboração de contratos",
    content: (
      <>
        <p>
          Um contrato bem redigido é a principal proteção contra conflitos
          futuros. Elaboramos contratos sob medida para cada situação,
          garantindo clareza nas cláusulas, segurança jurídica e proteção dos
          interesses do cliente.
        </p>
        <ul className="areaDetList">
          <li>Contratos de prestação de serviços</li>
          <li>Contratos de compra e venda</li>
          <li>Contratos de parceria e sociedade</li>
          <li>Acordos e distratos em geral</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiEdit />,
    title: "Revisão de contratos",
    content: (
      <>
        <p>
          Antes de assinar, é essencial entender exatamente o que está sendo
          acordado. Analisamos contratos já redigidos, identificando cláusulas
          abusivas, riscos ocultos e pontos que podem ser renegociados antes
          da assinatura.
        </p>
        <ul className="areaDetList">
          <li>Análise de cláusulas e riscos contratuais</li>
          <li>Sugestão de ajustes e renegociação de termos</li>
          <li>Parecer jurídico sobre contratos complexos</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiAlertTriangle />,
    title: "Responsabilidade civil",
    content: (
      <>
        <p>
          Atuamos em casos que envolvem danos causados a terceiros,
          representando tanto quem busca reparação quanto quem precisa se
          defender de uma cobrança indevida — sempre com foco em uma solução
          justa e proporcional ao caso.
        </p>
        <ul className="areaDetList">
          <li>Ações de danos morais e materiais</li>
          <li>Responsabilidade civil contratual e extracontratual</li>
          <li>Defesa em processos de indenização</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiDollarSign />,
    title: "Indenizações e cobrança de dívidas",
    content: (
      <>
        <p>
          Cuidamos de ações voltadas à reparação de prejuízos e à cobrança de
          valores devidos, buscando a via mais rápida e eficaz para resolver
          cada situação, seja por acordo ou por medida judicial.
        </p>
        <ul className="areaDetList">
          <li>Ações de cobrança e execução de dívidas</li>
          <li>Pedidos de indenização por descumprimento contratual</li>
          <li>Negociação e acordos extrajudiciais</li>
        </ul>
      </>
    ),
  },
];

export default function DireitoCivil() {
  return (
    <div className="areaDetPage">

      {/* ── HERO ── */}
      <section className="areaDetHero">
        <div className="areaDetHeroBg" />
        <div className="areaDetHeroInner">
          <h1 className="areaDetHeroTitle">Direito Civil e Contratual</h1>
          <p className="areaDetHeroSub">
            Segurança jurídica em cada acordo, contrato e relação firmada por
            você ou pela sua empresa.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="areaDetIntro">
        <div className="areaDetContainer">
          <p>
            O Direito Civil está presente em praticamente toda relação
            pessoal e comercial. Atuamos na elaboração, revisão e defesa de
            contratos e obrigações, prevenindo conflitos e resolvendo disputas
            com agilidade e clareza.
          </p>
        </div>
      </section>

      {/* ── SEÇÕES ── */}
      <section className="areaDetSections">
        <div className="areaDetContainer">
          {sections.map((s, i) => (
            <div className="areaDetCard" key={i}>
              <div className="areaDetCardIcon">{s.icon}</div>
              <div className="areaDetCardBody">
                <h2 className="areaDetCardTitle">{s.title}</h2>
                <div className="areaDetCardContent">{s.content}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RODAPÉ CTA ── */}
      <section className="areaDetFooterCta">
        <div className="areaDetContainer areaDetFooterInner">
          <FaWhatsappIcon className="areaDetFooterIcon" />
          <div>
            <h3>Precisa elaborar, revisar ou resolver um conflito contratual?</h3>
            <p>Fale com nossa equipe e entenda seus direitos.</p>
          </div>
          <a
            href="https://wa.me/551930200163"
            target="_blank"
            rel="noreferrer"
            className="btnPrimary"
          >
            Falar com um advogado
          </a>
        </div>
      </section>

    </div>
  );
}