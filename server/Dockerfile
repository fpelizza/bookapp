# Utiliza una imagen base adecuada para tu servidor (por ejemplo, node)
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 8080
# Comando para iniciar el servidor
CMD ["node", "index.js"]
