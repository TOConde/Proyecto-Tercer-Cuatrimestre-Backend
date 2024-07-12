const userQueries = {
    selectByEmail: 'select u.usuarioID, u.email, u.password, u.activo, u.rolID, r.codigo, r.nombre from usuarios u join roles r on u.rolID = r.rolID WHERE u.email = ?;',    

    selectAll: 'select * from usuarios;',

    selectUserById: 'select email, nombre, edad, pais, idioma, fechaDeSuscripcion, tipoDeSuscripcion, recibirCorreos, url_userImage, ulr_userBanner from usuarios WHERE usuarioID = ?',

    selectUserByIdPassword: 'select password from usuarios WHERE usuarioID = ?',

    registerUser: 'insert into usuarios (email, password, activo, rolID, tipoDeSuscripcion, fechaDeSuscripcion, recibirCorreos) values (?, ?, ?, ?, ?, ?, ?)',

    selectAllMovies: 'select * from peliculas;',

    editUserProfile: 'update usuarios set nombre = ?, edad = ?, pais = ? WHERE usuarioID = ?;',

    editUserSubscription: 'update usuarios set tipoDeSuscripcion = ? WHERE usuarioID = ?;',

    editUserNotifications: 'update usuarios set recibirCorreos = ? WHERE usuarioID = ?;',

    editUserEmail: 'update usuarios set email = ? WHERE usuarioID = ?',

    editUserPassword: 'update usuarios set password = ? WHERE usuarioID = ?;',

    editUserImg: 'update usuarios set url_userImage = ? WHERE usuarioID = ?;'
}

export default userQueries;