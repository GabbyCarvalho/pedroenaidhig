import "../styles/Contato.css";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiMapPin, FiPhone, FiMail, FiClock, FiCheck } from "react-icons/fi";

/* ─── HERO CONTATO ─── */
function HeroContato() {
  return (
    <section className="heroContato">
      <div className="heroContatoBg" />
      <div className="heroContatoContent">
        <span className="heroTag">Entre em contato</span>
        <h1 className="heroContatoTitle">
          Estamos prontos para ouvir o seu caso
        </h1>
        <p className="heroContatoSub">
          Seja presencial, online ou por WhatsApp — escolha a forma que for mais
          cômoda para você. Nossa equipe responde em até 24 horas.
        </p>
        <div className="heroContatoPills">
          <span className="contatoPill"><FiCheck /> Sigilo garantido</span>
          <span className="contatoPill"><FiCheck /> Sem compromisso inicial</span>
          <span className="contatoPill"><FiCheck /> Atendimento humanizado</span>
        </div>
      </div>
    </section>
  );
}

/* ─── FORM DE CONTATO ─── */
function FormContato() {
  const [lgpd, setLgpd] = useState(false);

  return (
    <section className="contatoSection">
      <div className="container contatoGrid">

        {/* ── INFORMAÇÕES ── */}
        <div className="contatoInfo">
          <span className="sectionTag">Fale conosco</span>
          <h2 className="sectionTitle">Informações de contato</h2>
          <p className="contatoInfoDesc">
            Prefere nos contatar diretamente? Escolha o canal mais conveniente.
            Respondemos com agilidade e atenção.
          </p>

          <div className="contatoItens">
            <div className="contatoItem">
              <div className="contatoItemIcon"><FaWhatsapp /></div>
              <div>
                <strong>WhatsApp</strong>
                <a
                  href="https://wa.me/SEUNUMERO"
                  target="_blank"
                  rel="noreferrer"
                >
                  (19) 99999-9999
                </a>
              </div>
            </div>

            <div className="contatoItem">
              <div className="contatoItemIcon"><FiPhone /></div>
              <div>
                <strong>Telefone</strong>
                <span>(19) 3333-3333</span>
              </div>
            </div>

            <div className="contatoItem">
              <div className="contatoItemIcon"><FiMail /></div>
              <div>
                <strong>E-mail</strong>
                <a href="mailto:contato@escritorio.adv.br">
                  contato@escritorio.adv.br
                </a>
              </div>
            </div>

            <div className="contatoItem">
              <div className="contatoItemIcon"><FiMapPin /></div>
              <div>
                <strong>Endereço</strong>
                <span>Rua Barão de Paranapanema, 146</span>
                <span>Sala 62, Bloco C – Campinas/SP</span>
              </div>
            </div>

            <div className="contatoItem">
              <div className="contatoItemIcon"><FiClock /></div>
              <div>
                <strong>Horário de atendimento</strong>
                <span>Segunda a sexta: 9h às 18h</span>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noreferrer"
            className="btnPrimary btnWa"
          >
            <FaWhatsapp /> Falar pelo WhatsApp agora
          </a>
        </div>

        {/* ── FORMULÁRIO ── */}
        <div className="contatoFormWrap">
          <h3>Envie uma mensagem</h3>
          <p className="formSubtitle">
            Preencha o formulário e entraremos em contato em breve.
          </p>

          <div className="formRow">
            <div className="formGroup">
              <label>Nome completo *</label>
              <input type="text" placeholder="Seu nome" />
            </div>
            <div className="formGroup">
              <label>Telefone / WhatsApp *</label>
              <input type="tel" placeholder="(19) 99999-9999" />
            </div>
          </div>

          <div className="formGroup">
            <label>E-mail</label>
            <input type="email" placeholder="seuemail@exemplo.com" />
          </div>

          <div className="formGroup">
            <label>Área de interesse *</label>
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
            <label>Como prefere ser atendido?</label>
            <select>
              <option value="">Selecione uma modalidade</option>
              <option>Presencial</option>
              <option>Online (videoconferência)</option>
              <option>Híbrido</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Mensagem *</label>
            <textarea
              rows={5}
              placeholder="Descreva brevemente sua situação jurídica..."
            />
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
                . Autorizo o uso dos meus dados pessoais para fins de contato e
                atendimento jurídico, conforme a{" "}
                <strong>Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
                Meus dados não serão compartilhados com terceiros sem meu
                consentimento.
              </span>
            </label>
          </div>

          <button
            className="btnPrimary btnEnviar"
            disabled={!lgpd}
            style={{ opacity: lgpd ? 1 : 0.5, cursor: lgpd ? "pointer" : "not-allowed" }}
          >
            Enviar mensagem <FiArrowRight />
          </button>

          <p className="lgpdNote">
            * Campos obrigatórios. Seus dados são tratados com total sigilo e
            segurança.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ─── MAPA ─── */
function Mapa() {
  return (
    <section className="mapaContatoSection">
      <div className="container">
        <span className="sectionTag center">Como chegar</span>
        <h2 className="sectionTitle center">Nossa localização</h2>
        <div className="mapaWrapper" style={{ marginTop: "2rem" }}>
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

/* ─── PÁGINA CONTATO ─── */
export default function Contato() {
  return (
    <>
      <HeroContato />
      <FormContato />
      <Mapa />
    </>
  );
}