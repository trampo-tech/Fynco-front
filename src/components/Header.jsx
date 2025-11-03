import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="hdr">
      <div className="brand">
        <span className="logo">F</span>
        <strong>Fynco</strong>
      </div>
      <nav>
        <Link className={pathname==="/quem-somos" ? "active" : ""} to="/quem-somos">
          Quem Somos
        </Link>
        <Link className={pathname==="/working" ? "active" : ""} to="/working">
          Working…
        </Link>
      </nav>
    </header>
  );
}
