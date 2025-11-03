import { Routes, Route, Navigate } from "react-router-dom";
import QuemSomos from "./pages/QuemSomos.jsx";
import Working from "./pages/Working.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/quem-somos" replace />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/working" element={<Working />} />
        <Route path="*" element={<Navigate to="/quem-somos" replace />} />
      </Routes>
    </>
  );
}
