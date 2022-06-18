<p align="center">
![image](https://user-images.githubusercontent.com/101824101/174446655-3034805f-afeb-4fc4-8ec4-26aa2fb11293.png)
</p>
<h2 align="center">Videoclub</h2>
<p>Se realiza un pequeño CRUD de un videoclub en sequelize. Hay 3 tablas y las relaciones son muchos a muchos.<br>
<br>
<img src="/img/relaciones.png"><br>
El concepto del proyecto se basa en el Modelo Vista Controlador (Mvc)<br>
- A continuacion explicamos los endpoints:<br>
<h5><p>Usuarios</p></h5>
- get('usuarios/') Este endpoint busca todos los usuarios que hay creados, excluyendo los campos password, updatedAt y createdAt. Ademas necesita un token (autentificacion) para poder realizarlo.<br>
- post('usuarios/perfil') Este endpoint 
router.post('/register', UsuariosController.postUsuarioRegister);
router.post('/login', UsuariosController.loginUsuario);
router.put('/modificarperfil/:id', auth, UsuariosController.putModificarPerfil);<br>
<img src="img/pedalesacelerar.png">
</p>
<h5><p>Proyecto realizado en HTML, CSS y Javascript.</p></h5>
