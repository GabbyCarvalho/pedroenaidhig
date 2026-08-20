import "../../styles/AreaDetalhe.css";
import { FiFileText, FiSearch, FiHome, FiAlertTriangle, FiKey } from "react-icons/fi";
import { FaWhatsapp as FaWhatsappIcon } from "react-icons/fa";



const sections = [
  {
    icon: <FiFileText />,
    title: "Contratos imobiliários",
    content: (
      <>
        <p>
          Toda operação imobiliária deve estar amparada por um contrato claro
          e seguro, que proteja os interesses das partes e evite problemas
          futuros. Elaboramos e revisamos contratos de compra, venda, locação
          e demais negócios envolvendo imóveis.
        </p>
        <ul className="areaDetList">
          <li>Contratos de compra e venda de imóveis</li>
          <li>Contratos de locação residencial e comercial</li>
          <li>Contratos de permuta e cessão de direitos</li>
          <li>Promessa de compra e venda</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiSearch />,
    title: "Due diligence e regularização imobiliária",
    content: (
      <>
        <p>
          Antes de fechar negócio, é fundamental verificar se o imóvel está
          livre de pendências que possam comprometer a segurança da
          transação. Realizamos a análise documental completa e cuidamos da
          regularização de imóveis com pendências registrais ou fiscais.
        </p>
        <ul className="areaDetList">
          <li>Análise de matrícula e certidões do imóvel</li>
          <li>Verificação de ônus, dívidas e ações judiciais</li>
          <li>Regularização de construções e averbações</li>
          <li>Retificação de área e georreferenciamento</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiHome />,
    title: "Direito condominial",
    content: (
      <>
        <p>
          Atuamos junto a condomínios, síndicos e condôminos na prevenção e
          solução de conflitos do dia a dia, sempre buscando o cumprimento da
          convenção e do regimento interno com equilíbrio entre os interesses
          coletivos e individuais.
        </p>
        <ul className="areaDetList">
          <li>Elaboração e revisão de convenção e regimento interno</li>
          <li>Cobrança de taxas condominiais em atraso</li>
          <li>Assessoria em assembleias e questões de convivência</li>
          <li>Responsabilização por danos e infrações condominiais</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiAlertTriangle />,
    title: "Ações possessórias e despejo",
    content: (
      <>
        <p>
          Quando o uso ou a posse de um imóvel é indevidamente ameaçado,
          perdido ou precisa ser recuperado, atuamos com agilidade para
          garantir a proteção do direito de propriedade e posse de nossos
          clientes.
        </p>
        <ul className="areaDetList">
          <li>Ações de despejo por falta de pagamento ou fim de contrato</li>
          <li>Ações de reintegração e manutenção de posse</li>
          <li>Ações de imissão na posse</li>
          <li>Defesa em processos possessórios</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiKey />,
    title: "Usucapião",
    content: (
      <>
        <p>
          Para quem exerce posse mansa, pacífica e contínua de um imóvel por
          tempo suficiente, o usucapião é o caminho para transformar essa
          posse em propriedade formal. Cuidamos de todo o processo, judicial
          ou extrajudicial, reunindo as provas necessárias ao reconhecimento
          do direito.
        </p>
        <ul className="areaDetList">
          <li>Usucapião extrajudicial (em cartório)</li>
          <li>Usucapião judicial</li>
          <li>Levantamento de provas de posse e tempo de ocupação</li>
        </ul>
      </>
    ),
  },
];

export default function DireitoImobiliario() {
  return (
    <div className="areaDetPage">

      {/* ── HERO ── */}
      <section className="areaDetHero">
        <div className="areaDetHeroBg" />
        <div className="areaDetHeroInner">
          <h1 className="areaDetHeroTitle">Direito Imobiliário e Condominial</h1>
          <p className="areaDetHeroSub">
            Segurança jurídica em cada negócio, imóvel e relação condominial
            envolvendo você ou sua empresa.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="areaDetIntro">
        <div className="areaDetContainer">
          <p>
            O patrimônio imobiliário exige atenção redobrada em cada etapa,
            da negociação à formalização. Atuamos na elaboração de contratos,
            regularização de imóveis, questões condominiais e defesa da posse
            e da propriedade, com agilidade e segurança jurídica.
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
            <h3>Precisa resolver uma questão imobiliária ou condominial?</h3>
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