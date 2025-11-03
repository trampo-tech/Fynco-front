import { Routes, Route, Navigate } from "react-router-dom";
import QuemSomos from "./pages/QuemSomos.jsx";
import Working from "./pages/Working.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* 👉 Quando acessar /, redireciona para /quem-somos */}
        <Route path="/" element={<Navigate to="/quem-somos" replace />} />
        
        {/* Página principal */}
        <Route path="/quem-somos" element={<QuemSomos />} />
        
        {/* Tela de Working */}
        <Route path="/working" element={<Working />} />

        {/* Se a rota não existir, redireciona pra /quem-somos */}
        <Route path="*" element={<Navigate to="/quem-somos" replace />} />
      </Routes>
    </>
  );
}
