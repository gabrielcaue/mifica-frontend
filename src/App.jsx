import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

// Páginas
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import CadastroAdmin from './pages/CadastroAdmin.jsx';
import AcessoAdmin from './pages/AcessoAdmin.jsx';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil.jsx';
import Configuracao from './pages/Configuracoes.jsx';
import RotaCadastroAdmin from './pages/RotaCadastroAdmin.jsx';

// Componentes
import RotaAdmin from './components/RotaAdmin.jsx';

function RotasProtegidas() {
  const { usuario } = useAuth();
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route
        path="/cadastro-admin"
        element={
          <RotaCadastroAdmin>
            <CadastroAdmin />
          </RotaCadastroAdmin>
        }
      />
      <Route
        path="/dashboard"
        element={
          usuario ? (
            <Dashboard />
          ) : (
            <Navigate to="/login" state={{ from: location.pathname }} />
          )
        }
      />
      <Route
        path="/admin"
        element={
          usuario ? (
            <RotaAdmin>
              <AdminDashboard />
            </RotaAdmin>
          ) : (
            <Navigate to="/login" state={{ from: location.pathname }} />
          )
        }
      />
      <Route path="/acesso-admin" element={<AcessoAdmin />} />
      <Route
        path="/perfil"
        element={
          usuario ? (
            <Perfil />
          ) : (
            <Navigate to="/login" state={{ from: location.pathname }} />
          )
        }
      />
      <Route
        path="/configuracoes"
        element={
          usuario ? (
            <Configuracao />
          ) : (
            <Navigate to="/login" state={{ from: location.pathname }} />
          )
        }
      />
    </Routes>
  );
}

export default function App() {
  const { carregando } = useAuth();

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-xl">
        Carregando...
      </div>
    );
  }

  return (
    <Router>
      <RotasProtegidas />
    </Router>
  );
}
