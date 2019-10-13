![jwt](https://i.ibb.co/vQkzfky/687474703a2f2f692e696d6775722e636f6d2f71444f4f75346f2e6a7067.jpg)

## Backend-jwt ( test )

Aplicación tipo Back-End, donde se prueba en funcionamiento de JWT (Json Web Token), una caracteristica de esto es que se emplea una llave de seguridad para validar las solicitudes del cliente. 

De esta manera se restringe el acceso a la aplicación, y solo los usuarios con  credenciales validas tendrán acceso a los recursos de la misma.

En la aplicación se manejan cursos, estudiantes, usuarios y creditos, estas son entidades las cuales actuan como modelos en el códigoy a través de estos se pueden gestionar los datos, posteriormente se expondran endpoints para su consulta.

## Requisitos

Se debe contar con una instalación de **Node.js** en su equipo, asi como un gestor de paquets como **npm** o **yarn** y un editor de texto, puede ser **atom** , **sublime-text** , **visual-studio code** o alguno de su preferencia.

Esta aplicación almacena datos a través de **mongodb** por lo que sera necesario tenerlo instalado.

Por otro lado es necesario tener instalado **Postman**, el cual que es un cliente de con el cual se pueden automatizar peticiones tipo http.

## Intrucciones de uso

* **Clonar el repositorio**: Clone el repositorio a través de [este enlace](https://github.com/blazinger/backend-test-jwt.git) y peguelo en la terminal de su sistema operativo de tal manera que se vea asi:

----
    git clone https://github.com/blazinger/backend-test-jwt.git

* **Instalar dependencias**: Acceder a la carpeta donde se ha descargado la aplicación e instalar dependencias :

    cd /chat-test
    yarn install
    o
    npm install

* **Ejecutar Nodemon**: Es una dependencia que activa un proceso monitor para node, lo que permite que no tengas que reiniciar el servidor con cada cambio, el comando seria:

    yarn start
    
    este comando ejecutará el script "start" el cual fué declarado en el package.json
    
![nodemon](https://i.ibb.co/N3GrN4p/1.png)

## Iniciar Sesión

Al acceder a postman se puede ejecutar el siguiente EndPoint para iniciar sesiòn :

-  localhost:5000/api/v1/auth/login

esta URL nececesta de dos parametros, los cuales son : **email** y **password** y el tipo de methodo debe ser **post** por lo tanto los datos en **postman** deben quedar de la siguiente manera : 

![postman](https://i.ibb.co/2qb8rhj/3.png)

## Consultar o crear registros 

Para añadir datos a nuestra aplicación se deberan ejecutar los siguientes EndPoints:

- Resgitro de usuarios : localhost:5000/api/v1/users/create (POST)
- Listar usuarios : Localhost:5000/api/v1/users/list (GET)

- Registro de estudiantes : localhost:5000/api/v1/students/create (POST)
- Listar Estudiantes : localhost:5000/api/v1/student/list (POST)

- Registro de cursos : localhost:5000/api/v1/courses/create
- Listar cursos : localhost:5000/api/v1/courses/list
- 
## Consutas solicitadas

con el cliente de postman se puede solicitar los siguientes recursos:

- Students con credits superior a 50 : localhost:5000/api/v1/enrollment/credits50 (GET)
- Student, sus courses y créditos : localhost:5000/api/v1/enrollment/list/{id} (GET)
    {id} => id del estudiante
- Course, sus students y credits : localhost:5000/api/v1/enrrolment/list/course/{id}
    {id} => id del curso
- Students con credits superior a 50 localhost:5000/api/v1/enrollment/credits50




