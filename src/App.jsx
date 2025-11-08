// src/App.jsx

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Páginas
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import CadastroAdmin from './pages/CadastroAdmin.jsx'; // ← CORREÇÃO AQUI
import AcessoAdmin from './pages/AcessoAdmin.jsx'; // ← novo import
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil.jsx';
import Configuracao from './pages/Configuracoes.jsx';

// Componentes
import RotaAdmin from './components/RotaAdmin.jsx';


export default function App() {
  const { usuario } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro-admin" element={
        sessionStorage.getItem('acessoAdmin') === 'true'
        ? <CadastroAdmin />
        : <Navigate to="/acesso-admin" />
        } />
        <Route path="/dashboard" element={usuario ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/admin" element={<RotaAdmin><AdminDashboard /></RotaAdmin>} />
        <Route path="/acesso-admin" element={<AcessoAdmin />} />
        <Route path="/perfil" element={usuario ? <Perfil /> : <Navigate to="/login" />} />
        <Route path="/configuracoes" element={usuario ? <Configuracao /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
