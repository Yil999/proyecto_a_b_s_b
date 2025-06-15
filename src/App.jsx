import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-red-800 text-white p-4">
          <h1 className="text-2xl font-bold text-center p-4">Academia de Baile "Sergio el Bailador"</h1>
          <p className="text-sm text-center p-2">Yocelin Castañeta</p>
        </header>
        <nav className="bg-orange-600 text-white p-2">
          <ul className="flex gap-4 text-center p-2" >
            <li ><Link to="/">Inicio</Link></li>
            <li><Link to="/cursos">Oferta de cursos</Link></li>
          </ul>
        </nav>
        <main className="flex-grow p-4 bg-gray-100 text-center p-2">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cursos" element={<CoursesPage />} />
          </Routes>
        </main>
        <footer className="bg-yellow-800 text-white text-center p-2">
          © 2025 Derechos Reservados Yocelin Castañeta
        </footer>
      </div>
    </Router>
  );
}