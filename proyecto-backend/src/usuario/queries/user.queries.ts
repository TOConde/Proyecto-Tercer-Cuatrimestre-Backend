const userQueries = {
    selectByEmail: 'select u.usuarioID, u.email, u.password, u.activo, u.rolID, r.codigo, r.nombre from usuarios u join roles r on u.rolID = r.rolID WHERE u.email = ?;',    

    selectAll: 'select * from usuarios;',

    selectUserById: 'select email, nombre, edad, pais, idioma, fechaDeSuscripcion, tipoDeSuscripcion, recibirCorreos, url_userImage, ulr_userBanner from usuarios WHERE usuarioID = ?;',

    selectUserByIdPassword: 'select password from usuarios WHERE usuarioID = ?;',

    registerUser: 'insert into usuarios (email, password, activo, rolID, tipoDeSuscripcion, fechaDeSuscripcion, recibirCorreos) values (?, ?, ?, ?, ?, ?, ?);',

    selectAllMovies: 'select * from peliculas;',

    editUserProfile: 'update usuarios set nombre = ?, edad = ?, pais = ? WHERE usuarioID = ?;',

    editUserSubscription: 'update usuarios set tipoDeSuscripcion = ? WHERE usuarioID = ?;',

    editUserNotifications: 'update usuarios set recibirCorreos = ? WHERE usuarioID = ?;',

    editUserEmail: 'update usuarios set email = ? WHERE usuarioID = ?;',

    editUserIdioma: 'update usuarios set idioma = ? WHERE usuarioID = ?;',

    editUserPassword: 'update usuarios set password = ? WHERE usuarioID = ?;',

    editUserImg: 'update usuarios set url_userImage = ? WHERE usuarioID = ?;',

    selectRelacionUsuarioGenero: 'SELECT * FROM usuario_generos WHERE usuarioID = ? AND generoID = ?;',

    agregarGeneroUsuario: 'insert into usuario_generos (usuarioID, generoID) values (?, ?);',

    deleteGenerosUsuario: 'DELETE FROM usuario_generos WHERE usuarioID = ? AND generoID NOT IN (?);',

    deleteAllGenerosUsuario: 'DELETE FROM usuario_generos WHERE usuarioID = ?;',

    selectUserGeneros: 'SELECT g.* FROM generos g JOIN usuario_generos ug ON g.generoID = ug.generoID WHERE ug.usuarioID = ?;'
}

export default userQueries;