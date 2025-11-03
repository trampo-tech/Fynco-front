import { useNavigate } from "react-router-dom";

export default function QuemSomos() {
  const navigate = useNavigate();
  const go = () => navigate("/working");

  return (
    <main className="container">
      <section className="hero">
        <h1>Quem Somos</h1>
        <p>
          A <strong>Fynco</strong> nasceu para simplificar a emissão de documentos fiscais,
          oferecendo tecnologia acessível e confiável para empresas que buscam agilidade,
          segurança e conformidade com a legislação.
        </p>
      </section>

      <section className="cards">
        <div className="card">
          <h3>Missão</h3>
          <p>Facilitar o universo fiscal com soluções inteligentes e humanas.</p>
        </div>
        <div className="card">
          <h3>Visão</h3>
          <p>Ser referência em automação fiscal e integração de sistemas no Brasil.</p>
        </div>
        <div className="card">
          <h3>Valores</h3>
          <ul>
            <li>Transparência</li>
            <li>Inovação</li>
            <li>Segurança</li>
            <li>Agilidade</li>
          </ul>
        </div>
      </section>

      <section className="actions">
        <button onClick={go}>Nosso Time</button>
        <button onClick={go}>Carreiras</button>
        <button onClick={go}>Blog</button>
        <button onClick={go}>Contato</button>
      </section>
    </main>
  );
}
