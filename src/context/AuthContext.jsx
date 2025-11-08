import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem('usuario');
    const tokenSalvo = localStorage.getItem('token');

    if (dadosSalvos) {
      setUsuario(JSON.parse(dadosSalvos));
    }
    if (tokenSalvo) {
      setToken(tokenSalvo);
    }
  }, []);

  const login = (dadosUsuario) => {
    console.log('Dados recebidos no login:', dadosUsuario);

    const { token, id, _id, ...resto } = dadosUsuario;

    // Decodifica o token para extrair a role
    let role = undefined;
    try {
      const decoded = jwtDecode(token);
      role = decoded.role;
      console.log('Token decodificado:', decoded);
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

    localStorage.setItem('usuario', JSON.stringify(usuarioFormatado));
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  };

  const value = {
    usuario,
    token,
    login,
    logout,
    isAdmin: usuario?.role === 'ADMIN'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
