# toggler

Permite activar y desactivar servicios proveídos por una API externa. Esta versión pública del proyecto incluye una base de datos local para experimentar.

La aplicación de ejemplo que se incluye, tiene 5 servicios de una supuesta red social que está implementada en 3 países: un país tiene todos los servicios disponibles y activados y los otros tienen algunos servcios fuera de scope (es decir, no disponibles para dicho país).

El sistema se comporta de la siguiente manera: si un servicio no está disponible en un país, y por alguna razón está activado, se muestra en color rojo para advertir de la situación, y si no, se muestra transparente para ayudar a evitar que se accione sin querer.

La interfaz full-responsive está hecha con AngularJS y Bootstrap.

![toggler](https://user-images.githubusercontent.com/29981509/27976130-3a13d602-6333-11e7-9da3-95a3750ac339.png)

![toggler oos](https://user-images.githubusercontent.com/29981509/27976135-3f3901fc-6333-11e7-8ab9-18028eba596c.png)


### Cómo ejecutar

Se incluye un lanzador que para operar la aplicación fácilmente usando Docker con comandos para instalar, lanzar y detener:
```sh
./toggler install
./toggler run
./toggler stop
```

También se incluye un entorno de desarrollo con **nodemon** y **browserSync**

Para levantar el entorno de desarrollo, escribir `gulp`


### Cómo instalar docker
* Elementary: https://gist.github.com/ChrisTimperley/17d5bf0276672367e86081fa74db4353
* Ubuntu: https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/
