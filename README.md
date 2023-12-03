# Ordenes
Ordenes es una aplicación web que permite gestionar las órdenes de compra y venta de productos. Está desarrollada con el framework Laravel 8 y utiliza React para el frontend. También usa Tailwind CSS y Material UI para el diseño y la interacción de la interfaz.

## Requisitos
Para ejecutar la aplicación se necesita tener instalado lo siguiente:

- PHP >= 7.4
- Composer
- Node.js
- MySQL

## Instalación
Para instalar la aplicación se deben seguir los siguientes pasos:

1. Clonar el repositorio de git con el comando `git clone https://github.com/wil93h/app_ordenes`.
2. Entrar en la carpeta del proyecto con el comando `cd app_ordenes`.
3. Instalar las dependencias de PHP con el comando `composer install`. Este comando descarga e instala los paquetes necesarios para el funcionamiento de Laravel.
4. Instalar las dependencias de Node.js con el comando `npm install`. Este comando descarga e instala los paquetes necesarios para el funcionamiento de React, Tailwind CSS, Material UI y otras herramientas de frontend.
5. Crear una base de datos MySQL con el nombre que se desee, por ejemplo `ordenes_db`.
6. Copiar el archivo `.env.example` y renombrarlo como `.env`. Este archivo contiene las variables de entorno de la aplicación, como la conexión a la base de datos, el nombre de la aplicación, etc.
7. Editar el archivo `.env` y configurar los datos de la base de datos, como el nombre, el usuario, la contraseña, el host y el puerto. Por ejemplo:


DB_CONNECTION=mysql DB_HOST=127.0.0.1 DB_PORT=3306 DB_DATABASE=ordenes_db DB_USERNAME=root DB_PASSWORD=


8. Generar una clave de aplicación con el comando `php artisan key:generate`. Este comando crea una cadena aleatoria que se usa para cifrar los datos de la aplicación.
9. Ejecutar las migraciones de la base de datos con el comando `php artisan migrate`. Este comando crea las tablas y los campos necesarios para almacenar los datos de la aplicación.
10. Iniciar el servidor de desarrollo con el comando `php artisan serve`. Este comando lanza un servidor web local que permite acceder a la aplicación desde el navegador.
11. Compilar los archivos de frontend con el comando `npm run dev`. Este comando genera los archivos CSS y JS que se usan para el diseño y la interacción de la aplicación.

## Uso
Para usar la aplicación se debe acceder a la URL `http://localhost:8000` desde el navegador. Allí se podrá ver la interfaz de la aplicación, que permite crear y consultar las órdenes de compra.