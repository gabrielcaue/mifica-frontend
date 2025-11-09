# Mifica Frontend

Interface web do projeto **Mifica**, desenvolvido com foco em acessibilidade, arquitetura limpa e escalabilidade.

## 🔧 Tecnologias utilizadas

- React + Vite
- Axios
- TailwindCSS
- JWT Authentication
- React Router DOM

## 📦 Funcionalidades

- Cadastro de usuários e administradores
- Proteção de rotas sensíveis via senha
- Validação de dados e feedback ao usuário
- Comunicação com backend via API REST
- Estrutura modular e escalável

## 🧠 Considerações sobre persistência e segurança

A funcionalidade de **alteração de senhas** requer a integração com um sistema de banco de dados relacional — como **MySQL**, **PostgreSQL**, ou outro de preferência — para garantir a persistência segura das credenciais e permitir operações de atualização autenticadas.

A implementação dessa camada foi deixada em aberto, podendo ser definida conforme a necessidade do recrutador, consumidor ou equipe técnica responsável pela evolução do projeto.

## 🧩 Próximos passos

O projeto está preparado para receber as seguintes integrações:

- 🔄 Visualização analítica com **Streamlit**
- 🐳 Containerização com **Docker**
- ☁️ Deploy em **Google Cloud Platform (GCP)**
- 🔗 Conexão com **Data Mash** para enriquecimento de dados
- 🔐 Integração opcional com banco de dados para persistência de usuários e senhas

> A arquitetura foi desenvolvida com foco em modularidade e escalabilidade, permitindo adaptações conforme o contexto de uso.

## 🚀 Como rodar localmente

```bash
git clone https://github.com/seu-usuario/frontend-mifica.git
cd frontend-mifica
npm install
npm run dev

Certifique-se de que o backend esteja rodando em http://localhost:8080.

src/
├── assets/
├── components/
├── pages/
├── services/
└── App.jsx

📌 Observações

O projeto ainda está em ajustes finais

Algumas rotas podem apresentar instabilidades no reload

Integração com Streamlit, Docker e GCP será adicionada em breve

Substitua seu-usuario pelos seus dados reais antes de subir.
```
🖼️ Prints do projeto

### Tela de Cadastro

![Cadastro de Projeto](prints/cadastro-projeto.png)

### Tela de Login

<img width="713" height="577" alt="Image" src="https://github.com/user-attachments/assets/225357fa-3ea8-43a3-8120-10342c3cf38e" />

### Tela de Dashboard

<img width="1445" height="912" alt="Image" src="https://github.com/user-attachments/assets/f25752dc-9121-4fab-89db-77cca1470734" />

### Tela de Perfil do Usuário

<img width="1083" height="422" alt="Image" src="https://github.com/user-attachments/assets/a1b8c9fd-508e-4869-b6bc-3459f24864e7" />

### Tela de Configuracao

<img width="1102" height="606" alt="Image" src="https://github.com/user-attachments/assets/e5e9a04f-5be0-49ea-82f8-3bb0d6255faf" />