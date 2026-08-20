import "../../styles/AreaDetalhe.css";
import { FiFileText, FiCheckCircle, FiEdit3, FiTrendingUp, FiPieChart } from "react-icons/fi";
import { FaWhatsapp as FaWhatsappIcon } from "react-icons/fa";



const sections = [
  {
    icon: <FiFileText />,
    title: "Inventário judicial",
    content: (
      <>
        <p>
          Quando há testamento, herdeiros menores ou incapazes, ou quando não
          existe consenso entre os herdeiros sobre a partilha, o inventário
          precisa ser feito pela via judicial. Conduzimos todo o processo,
          representando os interesses da família perante o juízo até a
          conclusão da partilha.
        </p>
        <ul className="areaDetList">
          <li>Abertura e condução do processo de inventário</li>
          <li>Representação de herdeiros em disputas sobre a partilha</li>
          <li>Levantamento e avaliação de bens do espólio</li>
          <li>Regularização de pendências fiscais e patrimoniais</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiCheckCircle />,
    title: "Inventário extrajudicial",
    content: (
      <>
        <p>
          Quando todos os herdeiros são maiores, capazes e estão de acordo
          sobre a partilha, e não há testamento, o inventário pode ser feito
          diretamente em cartório — um caminho mais rápido, simples e
          econômico do que a via judicial. Cuidamos de toda a documentação e
          acompanhamos o processo do início ao fim.
        </p>
        <ul className="areaDetList">
          <li>Elaboração da escritura pública de inventário e partilha</li>
          <li>Levantamento de documentos e certidões necessárias</li>
          <li>Cálculo e orientação sobre o ITCMD</li>
          <li>Acompanhamento em cartório até a conclusão</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiEdit3 />,
    title: "Testamentos",
    content: (
      <>
        <p>
          Elaboramos testamentos que expressam com clareza e segurança
          jurídica a vontade do testador, respeitando a legítima dos herdeiros
          necessários e evitando conflitos futuros entre os familiares.
        </p>
        <ul className="areaDetList">
          <li>Testamento público, particular ou cerrado</li>
          <li>Orientação sobre a parte disponível do patrimônio</li>
          <li>Revisão e atualização de testamentos já existentes</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiTrendingUp />,
    title: "Planejamento sucessório",
    content: (
      <>
        <p>
          Organizar a sucessão em vida é a forma mais eficaz de proteger o
          patrimônio da família e evitar desgastes, custos e disputas entre
          herdeiros no futuro. Avaliamos o cenário patrimonial e indicamos as
          melhores estratégias para cada caso.
        </p>
        <ul className="areaDetList">
          <li>Doação de bens em vida, com ou sem reserva de usufruto</li>
          <li>Constituição de holding patrimonial e familiar</li>
          <li>Planejamento tributário sucessório</li>
          <li>Definição antecipada de partilha entre herdeiros</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiPieChart />,
    title: "Partilha de bens",
    content: (
      <>
        <p>
          Cuidamos da divisão justa do patrimônio entre os herdeiros,
          considerando bens móveis, imóveis, participações societárias e
          demais direitos do espólio, sempre buscando um acordo equilibrado e
          juridicamente seguro para todas as partes.
        </p>
        <ul className="areaDetList">
          <li>Elaboração de plano de partilha</li>
          <li>Avaliação de bens e participações societárias</li>
          <li>Mediação entre herdeiros em caso de divergências</li>
        </ul>
      </>
    ),
  },
];

export default function DireitoSucessorio() {
  return (
    <div className="areaDetPage">

      {/* ── HERO ── */}
      <section className="areaDetHero">
        <div className="areaDetHeroBg" />
        <div className="areaDetHeroInner">
          <h1 className="areaDetHeroTitle">Direito Sucessório</h1>
          <p className="areaDetHeroSub">
            Segurança jurídica na transmissão e proteção do patrimônio da sua
            família.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="areaDetIntro">
        <div className="areaDetContainer">
          <p>
            Questões sucessórias envolvem patrimônio, mas também relações
            familiares. Conduzimos inventários, testamentos e planejamento
            sucessório com atenção técnica e sensibilidade, buscando sempre a
            solução mais rápida e menos desgastante para todos os envolvidos.
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
            <h3>Precisa organizar um inventário ou planejar sua sucessão?</h3>
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