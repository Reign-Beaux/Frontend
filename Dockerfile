# Imagen base Node con Alpine, versión fija para reproducibilidad
FROM node:24.9-alpine3.22

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiar archivos de dependencias para aprovechar caché
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias con pnpm
RUN pnpm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto que usa Vite
EXPOSE 5173

# Comando por defecto para desarrollo con hot-reload
CMD ["pnpm", "run", "dev"]

