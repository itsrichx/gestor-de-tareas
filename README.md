# Documentación del Proyecto Dockerizado
## 1. Introducción
Este documento proporciona una visión general de cómo configurar y ejecutar el proyecto Task Manager utilizando Docker y Docker Compose. Este proyecto está diseñado para gestionar tareas y utiliza una base de datos PostgreSQL para el almacenamiento de datos.

## 2. Objetivo
El objetivo del proyecto es crear un gestor de tareas con una arquitectura de microservicios usando Docker. La aplicación incluye:

Base de datos PostgreSQL: Almacena la información de las tareas.
Aplicación: Gestiona la lógica de negocio y la interfaz de usuario.
## 3. Requisitos
Antes de empezar, asegúrate de tener instaladas las siguientes herramientas:

Docker: Versión 26.0.0 o superior.
Docker Compose: Versión 2.26.1 o superior.
## 4. Estructura del Proyecto
La estructura del proyecto es la siguiente:

scss
Copiar código
project-root/
│
├── docker-compose.yml
├── .env
├── config.json
├── Dockerfile
└── src/
    └── (código fuente de la aplicación)
### 4.1. docker-compose.yml
Este archivo define los servicios que se ejecutarán en contenedores Docker, incluyendo la base de datos PostgreSQL y la aplicación. También configura las redes necesarias para la comunicación entre los servicios.

### 4.2. .env
Este archivo contiene variables de entorno utilizadas para la configuración de la aplicación. Ejemplo:

css
Copiar código
JWT_SECRET=hT8&lK1!9LzM4*WpY7qP3&@bR6sX
### 4.3. config.json
Este archivo contiene la configuración de la base de datos para los entornos de desarrollo, prueba y producción.

### 4.4. Dockerfile
Define el entorno para construir la imagen de la aplicación. Incluye las dependencias necesarias y los comandos para construir y ejecutar la aplicación.

### 4.5. src/
Contiene el código fuente de la aplicación.

##5. Dependencias
PostgreSQL: Base de datos utilizada para el almacenamiento de datos.
Node.js: Entorno de ejecución para la aplicación.
Sequelize: ORM para interactuar con PostgreSQL.
## 6. Configuración
### 6.1. docker-compose.yml
Este archivo define dos servicios: db y app. El servicio db utiliza la imagen de PostgreSQL, y el servicio app construye la imagen desde el Dockerfile y se conecta a la base de datos a través de la red app-network.

### 6.2. .env
Asegúrate de configurar correctamente las variables de entorno. El archivo .env debería estar en la raíz del proyecto y contiene configuraciones sensibles, como el secreto JWT.

## 7. Cómo Usar
### 7.1. Construir y Ejecutar los Contenedores
Para construir y ejecutar los contenedores, utiliza el siguiente comando:

bash
Copiar código
docker-compose up --build
Esto construirá la imagen de la aplicación y lanzará los contenedores.

### 7.2. Verificar el Estado
Para verificar el estado de los contenedores, usa:

bash
Copiar código
docker-compose ps
### 7.3. Acceder a la Aplicación
La aplicación estará disponible en http://localhost:3000. Puedes acceder a esta URL desde tu navegador para usar la aplicación.

### 7.4. Detener y Eliminar Contenedores
Para detener y eliminar los contenedores, redes y volúmenes, utiliza:

bash
Copiar código
docker-compose down
Para eliminar también las imágenes construidas:

bash
Copiar código
docker-compose down --rmi all
## 8. Contribuir
Si deseas contribuir al proyecto, sigue estos pasos:

Clona el Repositorio: git clone <url-del-repositorio>
Haz tus Cambios: Realiza tus modificaciones en el código.
Prueba los Cambios: Asegúrate de que todo funcione como se espera.
Envía un Pull Request: Propón tus cambios al repositorio original.
## 9. Problemas Conocidos
Problemas de Conexión: Si la aplicación no puede conectarse a la base de datos, verifica las configuraciones en el archivo .env y en docker-compose.yml.
Errores en la Aplicación: Revisa los registros con docker-compose logs para obtener información sobre posibles errores.
## 10. Soporte
Para soporte adicional, puedes contactar al equipo de desarrollo en [correo electrónico] o abrir un issue en el repositorio del proyecto.

