_Si deseas ver la version en ingles podes hacer scroll hacia abajo y la encontrarás_

_If you what to read the english version of this content you can scroll down until you find it_

# Aplicación de Pagos 360 | Version en español

Esta es una aplicación web construida con Angular versión 16.1.8 que interactúa con la API de PAGOS360 para mostrar informes de cobranzas.

## Inicio

### Requisitos previos

- Node.js (v16.14.0 o superior)
- Angular CLI (v16.1.8 o superior)

### Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-nombre-de-usuario/pagos-360-app.git
```

2. Ingresa al directorio del proyecto:

```bash
cd pagos-360-app
```

3. Instala las dependencias:

```
npm install
```

## Uso

1. Configura tu clave de API en `src/environments/environment.ts`
2. Inicia el servidor de desarrollo:

```
npm run start
```

3. Accede a la aplicación en tu navegador: [http://localhost:4200](http://localhost:4200)

## Compilación para Producción

Para construir la aplicación para producción, utiliza el siguiente comando:

```
ng build --configuration production
```

## Docker

También puedes ejecutar la aplicación usando Docker. Construye la imagen de Docker y ejecuta un contenedor con los siguientes comandos:

```
docker build -t pagos-360-app .
docker run -d -p 8080:80 pagos-360-app
```

Accede a la aplicación en tu navegador: [http://localhost:8080](http://localhost:8080)

## Características

- Buscar y mostrar informes de cobranzas
- Filtrar informes por fecha
- Inicio de sesión y autenticación simulados

## Contribuciones

Siéntete libre de contribuir a este proyecto abriendo problemas o solicitudes de extracción. ¡Tus comentarios y contribuciones son bienvenidos!

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

# Pagos 360 App | English version

This is a web application built with Angular version 16.1.8 that interacts with the PAGOS360 API to display payment collection reports.

## Getting Started

### Prerequisites

- Node.js (v16.14.0 or higher)
- Angular CLI (v16.1.8 or higher)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/carly-palmieri/pagos-360-ejercicio.git`
```

2. Navigate to the project directory:

```bash
cd pagos-360-app
```

3. Install dependencies:

```
npm install
```

### Usage

1. Configure your API key in `src/environments/environment.ts`
2. Run the development server:

```
npm run start
```

3. Access the app in your browser: [http://localhost:4200](http://localhost:4200)

### Building for Production

To build the application for production, use the following command:

```
ng build --configuration production
```

### Docker

You can also run the app using Docker. Build the Docker image and run a container with the following commands:

```
docker build -t pagos-360-app .
docker run -d -p 8080:80 pagos-360-app
```

Access the app in your browser: [http://localhost:8080](http://localhost:8080)

## Features

- Search and display payment collection reports
- Filter reports by date
- Simulated login and authentication

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback and contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).
