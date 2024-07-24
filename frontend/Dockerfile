# Use uma imagem base oficial do Node.js
FROM node:16-alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install

# Instale react-router-dom e axios após instalar as dependências principais
RUN npm install react-router-dom
RUN npm install axios

# Copie o restante do código da aplicação para o contêiner
COPY . .

# Compile a aplicação React para produção
RUN npm run build

# Instale o servidor HTTP para servir os arquivos estáticos
RUN npm install -g serve

# Exponha a porta que o aplicativo irá rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["serve", "-s", "build"]
