export default function App() {
  const apiUrl = import.meta.env.VITE_API_URL; // opcional: mostre a URL da API se setada

  return (
    <main className="wrap">
      <div className="card">
        <div className="spinner" aria-hidden />
        <h1>Working…</h1>
        <p>Estamos preparando tudo por aqui.</p>

        {apiUrl ? (
          <p className="hint">
            API: <code>{apiUrl}</code>
          </p>
        ) : (
          <p className="hint dim">Defina <code>VITE_API_URL</code> nas envs do Render.</p>
        )}
      </div>

      <footer>Fynco • {new Date().getFullYear()}</footer>
    </main>
  );
}
