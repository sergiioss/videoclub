<p align="center">
<img src="/img/gekkhub.png"></p>
<h2 align="center">Videoclub</h2>
<p>Se realiza un pequeño CRUD de un videoclub en sequelize. Hay 3 tablas y las relaciones son muchos a muchos.<br>
<br>
<img src="/img/relaciones.png"><br>
El concepto del proyecto se basa en el Modelo Vista Controlador (Mvc)<br>
A continuacion explicamos los endpoints:<br>
<h3><p>Usuarios</p></h3>
<h5>get(usuarios/)</h5> Este endpoint busca todos los usuarios que hay creados, excluyendo los campos password, updatedAt y createdAt. Ademas necesita un token (autentificacion) para poder realizarlo.<br>
<h5>post(usuarios/perfil)</h5> Este endpoint mediante la id del usuario te muestra sus datos ( id,nombre,dni,email y telefono)<br>
<h5>post(usuarios/register)</h5> Este endpoint registra un usuario nuevo. No te deja registrar un usuario si se dejan campos en blanco y tampoco te dejaria crearlo si el dni,email o telefono ya estan en la base de datos.Tambien tienes la opcion de crear como admin el usuario y en caso de que no se complete ese campo aparecera como NO admin.<br>
<h5>post(usuarios/login)</h5> Este endpoint te logueas con tu usuario que previamente ya registraste y te crea un token para acceder a determinados endpoints.<br>
<h5>put(usuarios/modificarperfil/:id)</h5> Este endpoint sirve para modificar los campos del usuario, nombre, email o telefono y se necesita token.<br>
<h3>Peliculas</h3>
<h5>get(peliculas/)</h5> Este endpoint sirve para ver todas las peliculas del videoclub.<br>
<h5>get(peliculas/filtrar/:genero)</h5> Este endpoint filtra las peliculas por genero.<br>
<h5>get(peliculas/edadpeliculas/:edad_minima)</h5> Este endpoint pones la edad que tienes y te dice las peliculas que puedes ver.<br>
<h5>post(peliculas/addpelicula)</h5> Este endpoint añade peliculas siempre y cuando no esten creadas ya en el videoclub.<br>
<h5>post(peliculas/letrapelicula)</h5>Este endpoint te busca las peliculas por titulo.La busqueda se puede hacer tanto con el titulo completo como con las primeras letras.<br>
<h5>delete(peliculas/borrarpelicula/:id')</h5> Este endpoint borra peliculas mediante la id de la pelicula pero necesitas ser admin.<br>
<h3>Alquiler</h3>
<h5>get(alquileres/)</h5>Este endpoint muestra todos los alquileres pero necesitas ser admin.<br>
<h5>get(alquileres/veralquiler/:id)</h5>Este endpoint ve el alquiler de una persona haciendo un salto en las tablas y mostrando los campos Nombre Pelicula, Nombre Cliente, Fecha Alquiler y Fecha Devolucion.<br>
<h5>post(alquileres/addalquiler)</h5>Este endpoint crea un alquiler pero necesita token.<br>
</p>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
