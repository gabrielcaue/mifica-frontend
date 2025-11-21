```bash
# 🌐 Mifica Frontend

Interface web do projeto **Mifica**, desenvolvida em **React + Vite**, integrada ao backend em **Spring Boot + MySQL** e ao painel administrativo em **Streamlit**.  
O objetivo é oferecer uma plataforma modular com reputação, gamificação e transações blockchain.

---

## 🚀 Demonstração

> ⚠️ O deploy público ainda não foi realizado.  
> O projeto está pronto para containerização e deploy em **Docker** e **Google Cloud Platform (GCP)**.  

### Telas principais
- **Cadastro de Usuário**  
  ![Cadastro](prints/cadastro-projeto.png)

- **Login**  
  <img width="1021" height="577" alt="Login" src="https://github.com/user-attachments/assets/225357fa-3ea8-43a3-8120-10342c3cf38e" />

- **Perfil**  
  <img width="1083" height="422" alt="Perfil" src="https://github.com/user-attachments/assets/a1b8c9fd-508e-4869-b6bc-3459f24864e7" />

- **Dashboard**  
  <img width="1445" height="912" alt="Dashboard" src="https://github.com/user-attachments/assets/f25752dc-9121-4fab-89db-77cca1470734" />

---

## 🛠️ Tecnologias utilizadas

- **Frontend**: React + Vite, TailwindCSS, Axios, React Router DOM  
- **Backend**: Spring Boot, JWT Authentication, Swagger  
- **Banco de Dados**: MySQL  
- **Admin Panel**: Streamlit (embutido no frontend via iframe)  
- **Infraestrutura**: Docker (backend já configurado, frontend em andamento)  

---

## 📦 Funcionalidades

- Cadastro de usuários e administradores  
- Autenticação JWT e proteção de rotas  
- Sistema de reputação e conquistas desbloqueáveis  
- Painel administrativo integrado com Streamlit (menu lateral padrão)  
- Comunicação com backend via API REST  
- Estrutura modular e escalável  

---

## ⚙️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/frontend-mifica.git
cd frontend-mifica

# Instale dependências
npm install

# Rode o frontend
npm run dev
```
Certifique-se de que o backend esteja rodando em http://localhost:8080 e o Streamlit em http://localhost:8501.

## 🧩 Próximos passos
### 🐳 Containerização completa com Docker Compose (frontend + backend + MySQL + Streamlit);
### ☁️ Deploy em Google Cloud Platform (GCP) com Cloud Run e Cloud SQL;
### 🔗 Integração com Data Mash para enriquecimento de dados;
### 📊 CI/CD com GitHub Actions.

## 👨‍💻 Autor
Desenvolvido por Gabriel Cauê
## 📫 LinkedIn
## 📫 LinkedIn
[![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/gabrielcaues)