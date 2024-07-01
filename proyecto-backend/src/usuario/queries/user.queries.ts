const userQueries = {
    selectByEmail: 'select u.usuarioID, u.email, u.password, u.activo, u.rolID, r.codigo, r.nombre from usuarios u join roles r on u.rolID = r.rolID WHERE u.email = ?;',

    selectAll: 'select * from usuarios;',

    selectUserById: 'select email, nombre, edad, pais, idioma, fechaDeSuscripcion, tipoDeSuscripcion, recibirCorreos, url_userImage, ulr_userBanner from usuarios WHERE usuarioID = ?',

    registerUser: 'insert into usuarios (email, password, activo, rolID, tipoDeSuscripcion, fechaDeSuscripcion, recibirCorreos) values (?, ?, ?, ?, ?, ?, ?)',

    selectAllMovies: 'select * from peliculas;',

    editUserProfile: 'update usuarios set nombre = ?, edad = ?, pais = ? where usuarioID = ?;',

    editUserSubscription: 'update usuarios set tipoDeSuscripcion = ? where usuarioID = ?;',

    editUserNotifications: 'update usuarios set recibirCorreos = ? where usuarioID = ?;'
}

export default userQueries;