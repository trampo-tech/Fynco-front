import { useNavigate } from "react-router-dom";

export default function QuemSomos() {
  const navigate = useNavigate();
  const goWorking = () => navigate("/working");

  return (
    <main className="container">
      <section className="card">
        <h1>Quem Somos</h1>
        <p className="muted">
          A <strong>Fynco</strong> nasceu para simplificar a emissão de documentos fiscais
          (NF-e, CT-e, MDF-e), conectando empresas a processos confiáveis,
          rápidos e transparentes.
        </p>

        <div className="grid">
          <div className="box">
            <h3>Missão</h3>
            <p>Desburocratizar o fiscal com tecnologia simples e acessível.</p>
          </div>
          <div className="box">
            <h3>Visão</h3>
            <p>Ser a plataforma fiscal favorita de PMEs na América Latina.</p>
          </div>
          <div className="box">
            <h3>Valores</h3>
            <ul>
              <li>Confiabilidade</li>
              <li>Transparência</li>
              <li>Segurança</li>
              <li>Velocidade</li>
            </ul>
          </div>
        </div>

        <hr />

        <h2>O que estamos construindo</h2>
        <p className="muted">
          API moderna em PHP para emissão/consulta, front rápido em React, e um fluxo
          seguro para certificados A1. Tudo pensado para <em>developer experience</em>.
        </p>

        {/* Botões principais (com conteúdo na página) */}
        <div className="actions">
          <button className="btn ghost" onClick={goWorking}>Time</button>
          <button className="btn ghost" onClick={goWorking}>Carreiras</button>
          <button className="btn ghost" onClick={goWorking}>Blog</button>
          <button className="btn ghost" onClick={goWorking}>Parcerias</button>
        </div>

        <p className="hint">
          * Conforme pedido: <strong>cada botão extra</strong> leva para a tela <code>Working…</code>.
        </p>
      </section>
    </main>
  );
}
