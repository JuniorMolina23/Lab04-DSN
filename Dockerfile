# Usa la última versión de Node.js como base
FROM node:13.6.0

# Establece un directorio de trabajo para la aplicación
WORKDIR /app

# Copia el archivo package.json y package-lock.json a la imagen
COPY package.json .

# Instala las dependencias de la aplicación
RUN npm install

# Copia los archivos de la aplicación al contenedor
COPY . .

# Expone el puerto 3000
EXPOSE 9000

# Inicia la aplicación
CMD ["node", "src/index.js"]
