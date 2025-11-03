export default function Working() {
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <main className="container center">
      <div className="card narrow">
        <div className="spinner" aria-hidden />
        <h1>Working…</h1>
        <p className="muted">Estamos preparando essa funcionalidade.</p>
        {apiUrl ? (
          <p className="hint">
            API configurada: <code>{apiUrl}</code>
          </p>
        ) : (
          <p className="hint">Defina <code>VITE_API_URL</code> nas envs do Render.</p>
        )}
      </div>
    </main>
  );
}
