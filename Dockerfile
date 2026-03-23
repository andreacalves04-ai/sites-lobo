# Estágio de Build
FROM node:20-alpine AS build
WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./
RUN npm install

# Copia o restante do código e gera o build
COPY . .
RUN npm run build

# Estágio de Produção
FROM nginx:alpine

# Copia o build do estágio anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Copia configuração customizada do Nginx para suporte a SPA
COPY infra/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
