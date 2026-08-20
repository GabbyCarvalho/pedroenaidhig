import "../../styles/AreaDetalhe.css";
import { FiUserCheck, FiSearch, FiFileText, FiAlertTriangle, FiUsers } from "react-icons/fi";
import { FaWhatsapp as FaWhatsappIcon } from "react-icons/fa";



const sections = [
  {
    icon: <FiUserCheck />,
    title: "Atuação como Encarregado de Dados (DPO)",
    content: (
      <>
        <p>
          Nem toda empresa precisa ou tem estrutura para manter um DPO
          interno. Atuamos como Encarregado de Proteção de Dados
          terceirizado, cumprindo as exigências da LGPD junto à ANPD, aos
          titulares de dados e à própria organização, com muito mais
          economia do que uma contratação interna.
        </p>
        <ul className="areaDetList">
          <li>Nomeação formal como Encarregado (DPO) da empresa</li>
          <li>Canal de comunicação com titulares de dados e ANPD</li>
          <li>Atendimento a solicitações de titulares (acesso, correção, exclusão)</li>
          <li>Relatório periódico de conformidade à diretoria</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiSearch />,
    title: "Mapeamento de dados e diagnóstico de conformidade",
    content: (
      <>
        <p>
          Antes de adequar a empresa à LGPD, é preciso entender exatamente
          quais dados são coletados, tratados e armazenados, e por quê.
          Realizamos o mapeamento completo do fluxo de dados pessoais e
          identificamos os pontos de risco e não conformidade.
        </p>
        <ul className="areaDetList">
          <li>Mapeamento de dados pessoais (data mapping)</li>
          <li>Diagnóstico de maturidade em proteção de dados</li>
          <li>Identificação de bases legais para cada tratamento</li>
          <li>Plano de adequação priorizado por risco</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiFileText />,
    title: "Políticas e documentação de privacidade",
    content: (
      <>
        <p>
          Elaboramos toda a documentação exigida pela LGPD, adaptada à
          realidade e ao porte de cada empresa, garantindo transparência com
          clientes, colaboradores e parceiros.
        </p>
        <ul className="areaDetList">
          <li>Política de privacidade e aviso de cookies</li>
          <li>Política interna de proteção de dados</li>
          <li>Contratos e cláusulas de proteção de dados com fornecedores</li>
          <li>Relatório de Impacto à Proteção de Dados (RIPD)</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiAlertTriangle />,
    title: "Gestão de incidentes de segurança",
    content: (
      <>
        <p>
          Vazamentos e incidentes de segurança exigem resposta rápida e
          tecnicamente adequada, incluindo a análise sobre a necessidade de
          comunicação à ANPD e aos titulares afetados. Damos suporte
          completo desde a detecção até a mitigação dos riscos.
        </p>
        <ul className="areaDetList">
          <li>Plano de resposta a incidentes de segurança</li>
          <li>Avaliação de risco e necessidade de notificação à ANPD</li>
          <li>Suporte na comunicação a titulares afetados</li>
          <li>Medidas de contenção e mitigação de danos</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiUsers />,
    title: "Treinamento e cultura de proteção de dados",
    content: (
      <>
        <p>
          A conformidade com a LGPD depende do envolvimento de toda a
          equipe. Promovemos treinamentos e capacitações para que
          colaboradores identifiquem riscos no dia a dia e atuem de acordo
          com as boas práticas de proteção de dados.
        </p>
        <ul className="areaDetList">
          <li>Treinamentos periódicos com colaboradores e gestores</li>
          <li>Capacitação de equipes de TI, RH e marketing</li>
          <li>Orientação contínua sobre novas demandas e projetos</li>
        </ul>
      </>
    ),
  },
];

export default function DpoAsAService() {
  return (
    <div className="areaDetPage">

      {/* ── HERO ── */}
      <section className="areaDetHero">
        <div className="areaDetHeroBg" />
        <div className="areaDetHeroInner">
          <h1 className="areaDetHeroTitle">DPO as a Service</h1>
          <p className="areaDetHeroSub">
            Conformidade com a LGPD e proteção de dados para sua empresa,
            sem o custo de uma estrutura interna.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="areaDetIntro">
        <div className="areaDetContainer">
          <p>
            A LGPD exige que empresas de todos os portes tratem dados
            pessoais com responsabilidade. Atuamos como Encarregado de
            Proteção de Dados terceirizado, cuidando de toda a conformidade
            legal e da relação com titulares e autoridades, com agilidade e
            know-how jurídico especializado.
          </p>
          <p>
            Manter um DPO interno em tempo integral tem um custo alto e nem
            sempre faz sentido para o porte da empresa. Contratar o serviço
            de forma terceirizada representa uma <strong>economia
            significativa</strong> frente a uma contratação exclusiva — e
            ainda traz a vantagem de um profissional com{" "}
            <strong>bagagem jurídica</strong>, essencial para interpretar a
            lei corretamente, e não apenas conhecimento técnico de dados.
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
            <h3>Sua empresa já está em conformidade com a LGPD?</h3>
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