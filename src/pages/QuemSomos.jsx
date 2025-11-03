import { useNavigate } from "react-router-dom";

export default function QuemSomos() {
  const navigate = useNavigate();
  const go = () => navigate("/working");

  return (
    <main className="container qs">
      <section className="hero">
        <h1>Quem Somos</h1>
        <p>
          A <strong>Fynco</strong> existe para simplificar o universo fiscal.
          Construímos tecnologia leve e segura para que a emissão de notas e integrações com a SEFAZ sejam rápidas e descomplicadas.
        </p>
      </section>

      <section className="grid3">
        <div className="card">
          <h3>Missão</h3>
          <p>Transformar tarefas fiscais complexas em processos simples e automatizados.</p>
        </div>
        <div className="card">
          <h3>Visão</h3>
          <p>Ser referência em inovação e confiança no setor fiscal brasileiro.</p>
        </div>
        <div className="card">
          <h3>Valores</h3>
          <ul>
            <li>Transparência</li>
            <li>Segurança</li>
            <li>Agilidade</li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <p>Estamos construindo soluções fiscais modernas, seguras e acessíveis.</p>
        <div className="btns">
          <button onClick={go}>Conheça nosso time</button>
          <button className="ghost" onClick={go}>Trabalhe conosco</button>
        </div>
      </section>
    </main>
  );
}
