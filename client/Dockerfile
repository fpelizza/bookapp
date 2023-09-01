# Utiliza una imagen base adecuada para tu aplicación cliente (por ejemplo, node para una aplicación Vite)
FROM node:14

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
EXPOSE 3000

# Comando para ejecutar la aplicación cliente (ajusta esto según tus necesidades)
CMD ["npm", "run", "dev", "--host"]