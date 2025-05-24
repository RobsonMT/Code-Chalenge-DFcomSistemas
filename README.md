# Code Challenge DFcomSistemas

Este projeto é uma aplicação full-stack composta por:

- **Backend:** Node.js com Express e MongoDB
- **Frontend:** React com Vite
- **Banco de Dados:** MongoDB (container)

## 🐳 Executando com Docker Compose

### Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

### Passo a passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/RobsonMT/Code-Chalenge-DFcomSistemas.git
   cd Code-Chalenge-DFcomSistemas
   ```

2. **Inicie os containers:**

   ```bash
   docker-compose up -d
   ```

   Esse comando irá:
   - Construir as imagens do frontend e backend
   - Iniciar os serviços:
     - MongoDB na porta `27017`
     - Backend na porta `5000`
     - Frontend na porta `3000`

3. **Acesse a aplicação:**

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend (API): [http://localhost:5000](http://localhost:5000)

---

### Parando os containers

Para parar todos os serviços:

```bash
docker-compose down
```

### Visualizando logs

Você pode acompanhar os logs com:

```bash
docker-compose logs -f
```

---

## 📁 Estrutura do Projeto

```bash
Code-Chalenge-DFcomSistemas/
├── backend/            # Código-fonte do backend (Node.js/Express)
├── frontend/           # Código-fonte do frontend (React/Vite)
├── docker-compose.yml  # Configuração dos serviços
```

---

## ⚙️ Variáveis de Ambiente

No arquivo `docker-compose.yml`, a conexão do backend com o MongoDB já está configurada:

```yaml
environment:
  - MONGO_URI=mongodb://mongo:27017/products
```

---

## 🧪 Testando a API

Use ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar os endpoints.

Exemplo para listar produtos:

```http
GET http://localhost:5000/api/products
```

---

## 📝 Dicas

- Verifique se as portas `3000`, `5000` e `27017` estão livres no seu sistema.
- Se ocorrer erro de conflito no nome de container (ex: `"/mongo" is already in use`), remova o container antigo com:

  ```bash
  docker rm -f mongo
  ```

---

## 🔗 Repositório

[https://github.com/RobsonMT/Code-Chalenge-DFcomSistemas](https://github.com/RobsonMT/Code-Chalenge-DFcomSistemas)