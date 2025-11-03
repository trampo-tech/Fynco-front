import { useNavigate } from "react-router-dom";

export default function QuemSomos() {
  const navigate = useNavigate();
  const go = () => navigate("/working");

  return (
    <main className="container">
      {/* HERO */}
      <section className="qs-hero">
        <div className="qs-eyebrow">Sobre a Fynco</div>
        <h1>Fiscal simples, rápido e seguro.</h1>
        <p className="qs-sub">
          A Fynco nasceu para descomplicar a emissão de NF-e, CT-e e MDF-e para PMEs,
          com foco em confiabilidade, performance e uma experiência do desenvolvedor impecável.
        </p>
        <div className="qs-cta">
          <button onClick={go} aria-label="Falar com o time">Falar com o time</button>
          <button className="ghost" onClick={go} aria-label="Ver integrações">Ver integrações</button>
        </div>
      </section>

      {/* PROVAS / VALORES */}
      <section className="qs-cards">
        <div className="qs-card">
          <IconShield />
          <h3>Confiabilidade</h3>
          <p>Fila resiliente, retentativas automáticas e validações antes de enviar à SEFAZ.</p>
        </div>
        <div className="qs-card">
          <IconZap />
          <h3>Velocidade</h3>
          <p>Arquitetura enxuta e cache inteligente para autorizações mais ágeis.</p>
        </div>
        <div className="qs-card">
          <IconLock />
          <h3>Segurança</h3>
          <p>Certificado A1 criptografado, armazenamento efêmero e dados sensíveis via env.</p>
        </div>
        <div className="qs-card">
          <IconCode />
          <h3>DX primeiro</h3>
          <p>APIs claras, respostas consistentes e exemplos prontos para integrar em minutos.</p>
        </div>
      </section>

      {/* NÚMEROS / MÉTRICAS */}
      <section className="qs-stats">
        <Stat kpi="99,9%" label="disponibilidade" />
        <Stat kpi="< 2s" label="tempo médio de autorização*" />
        <Stat kpi="+10" label="UFs validadas" />
        <Stat kpi="LGPD" label="compliance" />
      </section>
      <p className="qs-note">*métrica ilustrativa enquanto o produto está em construção.</p>

      {/* COMO FUNCIONA */}
      <section className="qs-steps">
        <h2>Como funciona</h2>
        <ol>
          <li>
            <span className="step">1</span>
            <div>
              <strong>Envie os dados</strong>
              <p>O front chama a API com os itens, emitente, destinatário e impostos.</p>
            </div>
          </li>
          <li>
            <span className="step">2</span>
            <div>
              <strong>Assinamos e validamos</strong>
              <p>O back assina o XML com seu A1 e roda checagens antes da autorização.</p>
            </div>
          </li>
          <li>
            <span className="step">3</span>
            <div>
              <strong>Autorização e retorno</strong>
              <p>Consultamos o recibo e devolvemos XML autorizado e link do DANFE.</p>
            </div>
          </li>
        </ol>
        <div className="qs-steps-cta">
          <button onClick={go}>Guia de integração</button>
          <button className="ghost" onClick={go}>Exemplos de requisição</button>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="qs-final">
        <h2>Pronto para simplificar o fiscal?</h2>
        <p>Estamos construindo com você. Fale com o time e peça um sandbox.</p>
        <div className="qs-cta">
          <button onClick={go}>Começar</button>
          <button className="ghost" onClick={go}>Ver roadmap</button>
        </div>
      </section>
    </main>
  );
}

/* ---------- pequenos componentes ---------- */
function Stat({ kpi, label }) {
  return (
    <div className="qs-stat">
      <div className="kpi">{kpi}</div>
      <div className="label">{label}</div>
    </div>
  );
}

/* ---------- ícones SVG inline (sem dependências) ---------- */
function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l7 4v5c0 4.97-3.05 7.86-7 9-3.95-1.14-7-4.03-7-9V7l7-4z" stroke="#0C766A" strokeWidth="1.5" fill="#E8F6F3"/>
      <path d="M9 12l2 2 4-4" stroke="#0C766A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconZap() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M13 2L3 14h7l-1 8 11-12h-7l1-8z" fill="#E8F6F3" stroke="#0C766A" strokeWidth="1.5" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="10" width="16" height="10" rx="2" fill="#E8F6F3" stroke="#0C766A" strokeWidth="1.5"/>
      <path d="M8 10V8a4 4 0 118 0v2" stroke="#0C766A" strokeWidth="1.5"/>
    </svg>
  );
}
function IconCode() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" stroke="#0C766A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="#0C766A" strokeWidth="1.4" fill="#E8F6F3"/>
    </svg>
  );
}
