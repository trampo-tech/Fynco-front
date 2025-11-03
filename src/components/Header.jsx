import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <div className="logo">Fynco</div>
      <nav>
        <Link to="/quem-somos" className={pathname === "/quem-somos" ? "active" : ""}>
          Quem Somos
        </Link>
        <Link to="/working" className={pathname === "/working" ? "active" : ""}>
          Working…
        </Link>
      </nav>
    </header>
  );
}
