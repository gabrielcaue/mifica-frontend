import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const tokenSalvo = localStorage.getItem('token');
    const usuarioSalvo = localStorage.getItem('usuario');

    if (tokenSalvo && usuarioSalvo) {
      try {
        const usuarioRecuperado = JSON.parse(usuarioSalvo);
        setUsuario(usuarioRecuperado);
        setToken(tokenSalvo);
      } catch (error) {
        console.error('Erro ao carregar usuário do localStorage:', error);
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
      }
    }

    setCarregando(false);
  }, []);

  const login = (dadosUsuario) => {
    const { token, id, _id, ...resto } = dadosUsuario;

    let role = undefined;
    try {
      const decoded = jwtDecode(token);
      role = decoded.role;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
    }

    const usuarioFormatado = {
      ...resto,
      id: id || _id,
      role: role
    };

    setUsuario(usuarioFormatado);
    setToken(token);

    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuarioFormatado));
  };

  const logout = () => {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  };

  const value = {
    usuario,
    token,
    login,
    logout,
    isAdmin: usuario?.role === 'ADMIN',
    carregando
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
