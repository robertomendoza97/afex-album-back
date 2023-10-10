<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# AFEX ALBUM BACK

## Descripción del Proyecto

AFEX ALBUM BACK es la parte backend del proyecto AFEX ALBUM, desarrollado en Nest.js. Este proyecto se encarga de proporcionar los servicios necesarios para que el frontend pueda guardar y gestionar videos. Además, se conecta a la API de YouTube para buscar información de videos y devuelve objetos formateados al frontend.

## Características Clave

- Tres endpoints: Obtener todos los videos, borrar un video y crear un video.
- Conexión a la API de YouTube para obtener información de videos.
- Formateo de datos para su uso en el frontend.

## Tecnologías Utilizadas

- Nest.js
- TypeScript
- API de YouTube

## Instalación

A continuación, se detallan los pasos para instalar y ejecutar el proyecto en un entorno local.

1. Clona el repositorio de GitHub: `git clone https://github.com/robertomendoza97/afex-album-back.git`
2. Navega al directorio del proyecto: `cd afex-album-back`
3. Instala las dependencias: `npm install`
4. Renombra el archivo `.env.example` a `.env`
5. Configura las variables de entorno con tus datos de conexion.
6. Inicia el servidor: `npm start:dev`

## Endpoints

### 1. Obtener todos los videos

- **Ruta:** `afex/api/videos`
- **Método:** GET
- **Descripción:** Retorna todos los videos guardados.

### 2. Borrar un video

- **Ruta:** `afex/api/videos/:id`
- **Método:** DELETE
- **Descripción:** Borra un video por su ID.

### 3. Crear un video

- **Ruta:** `afex/api/videos`
- **Método:** POST
- **Descripción:** Busca la informacion de un video y lo almacena.

## Uso

Este proyecto se utiliza principalmente como una API para el proyecto frontend "AFEX ALBUM". Proporciona los servicios necesarios para gestionar videos y se conecta a la API de YouTube para obtener información adicional.

## Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu contribución: `git checkout -b mi-contribucion`
3. Realiza tus cambios y haz commit: `git commit -m "Añade nuevas características"`
4. Sube tus cambios a tu repositorio: `git push origin mi-contribucion`
5. Crea una solicitud de extracción (pull request) en GitHub.

## Contacto

Para cualquier consulta o pregunta sobre el proyecto, puedes ponerte en contacto con _Roberto mendoza_ a través de *robertoemendozac@gmail.com*.
