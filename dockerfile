FROM node:16 as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Utiliza el comando 'ng build' para construir la aplicación
RUN npm run build

# Etapa de producción con Nginx
FROM nginx:alpine

# Copia los archivos construidos desde la etapa anterior
COPY --from=build /usr/src/app/dist/pagos-360-app /usr/share/nginx/html

# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

# Comando para iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
