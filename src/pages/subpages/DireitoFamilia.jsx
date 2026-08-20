import "../../styles/AreaDetalhe.css";
import { FiUsers, FiCalendar, FiDollarSign, FiUserCheck, FiHome } from "react-icons/fi";
import { FaFileSignature } from "react-icons/fa";
import { FaWhatsapp as FaWhatsappIcon } from "react-icons/fa";



const sections = [
  {
    icon: <FaFileSignature />,
    title: "Divórcio",
    content: (
      <>
        <p>
          O divórcio pode ser feito de forma <strong>consensual</strong> (quando
          o casal está de acordo com os termos) ou <strong>litigiosa</strong>{" "}
          (quando há divergências a serem resolvidas judicialmente). Em ambos os
          casos, cuidamos da partilha de bens, da pensão, da guarda dos filhos e
          de todos os aspectos legais envolvidos, buscando sempre o caminho mais
          rápido e menos desgastante para você.
        </p>
        <ul className="areaDetList">
          <li>Divórcio consensual (inclusive extrajudicial, em cartório)</li>
          <li>Divórcio litigioso</li>
          <li>Partilha de bens</li>
          <li>Alteração de nome</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiUsers />,
    title: "Guarda de filhos",
    content: (
      <>
        <p>
          Definir a guarda é uma das decisões mais delicadas em uma separação.
          Orientamos os pais sobre as modalidades existentes — guarda{" "}
          <strong>compartilhada</strong>, <strong>unilateral</strong> ou{" "}
          <strong>alternada</strong> — sempre priorizando o melhor interesse da
          criança e buscando um acordo equilibrado entre os genitores.
        </p>
        <ul className="areaDetList">
          <li>Guarda compartilhada</li>
          <li>Guarda unilateral</li>
          <li>Revisão e alteração de guarda já estabelecida</li>
          <li>Mediação entre os pais</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiCalendar />,
    title: "Regulamentação de visitas",
    content: (
      <>
        <p>
          Quando a convivência entre pais e filhos não está definida ou precisa
          ser ajustada, atuamos na elaboração ou revisão do regime de visitas,
          garantindo dias, horários e condições claras que respeitem a rotina da
          criança e o direito de convívio de ambos os pais.
        </p>
        <ul className="areaDetList">
          <li>Fixação de regime de visitas</li>
          <li>Revisão de visitas já estabelecidas</li>
          <li>Casos de descumprimento do acordo de visitação</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiDollarSign />,
    title: "Pensão alimentícia",
    content: (
      <>
        <p>
          Cuidamos de ações de fixação, revisão e execução de pensão
          alimentícia, tanto para quem precisa garantir o sustento dos filhos
          quanto para quem busca ajustar um valor que não condiz mais com sua
          realidade financeira.
        </p>
        <ul className="areaDetList">
          <li>Fixação de pensão alimentícia</li>
          <li>Revisão de valores (para mais ou para menos)</li>
          <li>Execução de pensão em atraso</li>
          <li>Exoneração de pensão (maioridade, mudança de condição financeira)</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiUserCheck />,
    title: "Reconhecimento de paternidade",
    content: (
      <>
        <p>
          Auxiliamos em processos de reconhecimento — e também de contestação,
          quando cabível — de paternidade, incluindo ações de investigação de
          paternidade com exame de DNA, garantindo os direitos da criança ao
          nome, à herança e à convivência familiar.
        </p>
        <ul className="areaDetList">
          <li>Reconhecimento voluntário de paternidade</li>
          <li>Investigação de paternidade (ação judicial)</li>
          <li>Contestação/negatória de paternidade</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiHome />,
    title: "Dissolução de união estável",
    content: (
      <>
        <p>
          Assim como no divórcio, a união estável também precisa ser
          formalmente dissolvida para resguardar direitos sobre bens, pensão e
          guarda de filhos. Auxiliamos no reconhecimento e na dissolução da
          união, de forma consensual ou litigiosa, com atenção especial à
          comprovação do período de convivência.
        </p>
        <ul className="areaDetList">
          <li>Reconhecimento e dissolução de união estável</li>
          <li>Partilha de bens</li>
          <li>Conversão de união estável em casamento (quando de interesse do casal)</li>
        </ul>
      </>
    ),
  },
];

export default function DireitoFamilia() {
  return (
    <div className="areaDetPage">

      {/* ── HERO ── */}
      <section className="areaDetHero">
        <div className="areaDetHeroBg" />
        <div className="areaDetHeroInner">
          <h1 className="areaDetHeroTitle">Direito de Família</h1>
          <p className="areaDetHeroSub">
            Cuidado e clareza em cada etapa de um momento delicado para você e
            sua família.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="areaDetIntro">
        <div className="areaDetContainer">
          <p>
            Questões familiares exigem mais do que conhecimento jurídico —
            exigem sensibilidade. Cuidamos de cada caso com atenção às pessoas
            envolvidas, buscando soluções rápidas, seguras e que preservem o
            bem-estar de todos, especialmente das crianças.
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
            <h3>Está passando por uma situação familiar delicada?</h3>
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