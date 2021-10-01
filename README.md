# **aplicación para administración de presupuesto personal.**

## __API__

La api esta creada con Express.js sobre Node.js, haciendo uso del siguiente comando:

    express --view=pug api

Se utiliza Sequelize para el manejo de la base de datos relacional en Postgresql.

Los datos de PostgresSQL deben ser modificados en el archivo `api/.env` con la siguiente estructura:

    DB_USER=root
    DB_PASSWORD=toor
    DB_HOST=https://www.standardhost.tk
    DB_NAME=dbStandardForTest
    PORT=9000

si no se configura PORT se asignara el puerto `3001` por defecto.

**EL COMANDO PARA EJECUTAR EL SERVIDOR API ES EL SIGUIENTE:**

    DEBUG=api:* npm start

_se debe estar posicionado dentro del directorio `api/`_

## __CLIENT__

El Cliente fue creado con React sobre Vite.js en Node.js inicializado con el siguiente comando:

    npm init vite@latest

Se le añadio React-routing y Redux, se hace uso de `react-particles-js` aunque por defecto las particulas estan habilitadas, puede deshabilitarlas yendo a `client/components/app.jsx` y comentar la linea `25`

__Si bien hay un archivo `.env` no se esta haciendo uso de el, ya que la url de acceso al api que axios necesita para acceder al back se extrae del archivo `client/src/config.js` por tanto si usted tiene una url base en la api diferente de `http://localhost:3001` debera cambiarla en ese archivo ya que toda la apicacion del front utiliza esa url para llamar al back.__

__EL COMANDO PARA EJECUTAR EL FRONT ES:__

    npm run dev
_debe estar posicionado dentro del directorio `client/`_


**_RECUERDE HACER `npm install` TANTO EN `client/` COMO EN `api/` ANTES DE INICIALIZAR._**
**_Cualquier duda contactarme por cualquiera de estos medios:_**

### Linkedin:
https://www.linkedin.com/in/juan-bautista-abal-3618a5b5/

### Telegram:
https://t.me/holabautista

### Whatsapp:
https://wa.me/543417197294


Este proyecto tiene 26 hrs 11 mins de tiempo de escritura de codigo (solo se mide el tiempo en el que esta siendo utilizado el editor, el tiempo real es mas amplio).