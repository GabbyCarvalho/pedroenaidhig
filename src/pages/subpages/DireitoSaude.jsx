import "../../styles/AreaDetalhe.css";
import { FiAlertTriangle, FiShield, FiFileText, FiUserCheck, FiActivity } from "react-icons/fi";
import { FaWhatsapp as FaWhatsappIcon } from "react-icons/fa";



const sections = [
  {
    icon: <FiAlertTriangle />,
    title: "Erro médico e responsabilidade civil na saúde",
    content: (
      <>
        <p>
          Quando um erro no diagnóstico, tratamento ou procedimento causa
          danos ao paciente, é possível buscar a devida reparação. Atuamos na
          apuração da responsabilidade de médicos, clínicas, hospitais e
          planos de saúde, reunindo provas técnicas e conduzindo o caso com
          precisão.
        </p>
        <ul className="areaDetList">
          <li>Ações por erro de diagnóstico e de tratamento</li>
          <li>Ações por erro em procedimentos cirúrgicos e estéticos</li>
          <li>Indenização por danos morais e materiais</li>
          <li>Análise técnica e pericial do caso</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiShield />,
    title: "Planos de saúde",
    content: (
      <>
        <p>
          Negativas de cobertura, reajustes abusivos e demora no atendimento
          são situações recorrentes que podem ser contestadas judicialmente.
          Atuamos para garantir que o beneficiário tenha acesso ao tratamento
          e à cobertura a que tem direito, com a agilidade que o caso exige.
        </p>
        <ul className="areaDetList">
          <li>Negativa de cobertura de exames, cirurgias e tratamentos</li>
          <li>Negativa de medicamentos e home care</li>
          <li>Reajustes abusivos de mensalidade</li>
          <li>Rescisão indevida de contrato</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiFileText />,
    title: "Direitos do paciente",
    content: (
      <>
        <p>
          O paciente tem direito a informação clara, a um atendimento digno e
          ao acesso a seu prontuário médico. Orientamos e representamos
          pacientes e familiares em situações de violação a esses direitos,
          buscando a devida responsabilização.
        </p>
        <ul className="areaDetList">
          <li>Acesso e retificação de prontuário médico</li>
          <li>Consentimento informado e falhas na comunicação médica</li>
          <li>Violação de sigilo e dados sensíveis de saúde</li>
          <li>Negligência, imprudência e imperícia no atendimento</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiUserCheck />,
    title: "Defesa de médicos e profissionais da saúde",
    content: (
      <>
        <p>
          Também atuamos na defesa de médicos, dentistas e demais
          profissionais da saúde em processos éticos, administrativos e
          judiciais, garantindo o devido processo legal e a análise técnica
          adequada de cada caso.
        </p>
        <ul className="areaDetList">
          <li>Defesa em processos éticos perante conselhos de classe (CRM, CRO, entre outros)</li>
          <li>Defesa em ações de responsabilidade civil e indenização</li>
          <li>Assessoria preventiva na relação médico-paciente</li>
          <li>Elaboração de termos de consentimento e contratos</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiActivity />,
    title: "Responsabilidade de hospitais e clínicas",
    content: (
      <>
        <p>
          Hospitais e clínicas respondem por falhas na prestação do serviço,
          infecções hospitalares e problemas estruturais que causem dano ao
          paciente. Atuamos na apuração dessa responsabilidade e na busca pela
          reparação adequada.
        </p>
        <ul className="areaDetList">
          <li>Infecção hospitalar e falhas de biossegurança</li>
          <li>Falhas na equipe, estrutura ou equipamentos</li>
          <li>Responsabilidade solidária entre hospital e profissional</li>
        </ul>
      </>
    ),
  },
];

export default function DireitoMedico() {
  return (
    <div className="areaDetPage">

      {/* ── HERO ── */}
      <section className="areaDetHero">
        <div className="areaDetHeroBg" />
        <div className="areaDetHeroInner">
          <h1 className="areaDetHeroTitle">Direito Médico e da Saúde</h1>
          <p className="areaDetHeroSub">
            Proteção jurídica para pacientes e profissionais em um dos
            momentos mais sensíveis da vida.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="areaDetIntro">
        <div className="areaDetContainer">
          <p>
            Questões de saúde envolvem vulnerabilidade e urgência. Atuamos na
            defesa de pacientes vítimas de erro médico ou negativa de
            cobertura, e também de profissionais e instituições de saúde, com
            agilidade e conhecimento técnico específico da área.
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
            <h3>Precisa de orientação sobre um caso médico ou de saúde?</h3>
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