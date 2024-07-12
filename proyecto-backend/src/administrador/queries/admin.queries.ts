const adminQueries = {
    agregarPelicula: 'insert into peliculas (titulo, sinopsis, duracion, fechaEstreno, urlVideo, url_image, url_image_delete, display_url_image, activo) values (?, ?, ?, ?, ?, ?, ?, ?, ?);',
    agregarGeneroPelicula: 'insert into pelicula_generos (peliculaID, generoID) values (?, ?);',

    selectAllGeneros: 'select * from generos;',
    selectGenerosById: 'SELECT p.peliculaID, p.titulo, g.generoID, g.nombreGenero FROM peliculas p JOIN pelicula_generos pg ON p.peliculaID = pg.peliculaID JOIN generos g ON pg.generoID = g.generoID WHERE p.peliculaID = ?;',
    selectAllUsers: 'SELECT u.rolID, u.activo, u.edad, u.pais, u.fechaDeSuscripcion, u.tipoDeSuscripcion FROM usuarios u;',

    selectCantidadUsersActivos: 'SELECT COUNT(*) AS count FROM usuarios where activo = 1 AND rolID = 2;',
    selectPromedioEdad: 'SELECT AVG(edad) AS avg FROM usuarios where activo = 1 AND rolID = 2;',
    selectNacionPopular: 'SELECT pais, COUNT(*) AS cantidad FROM usuarios GROUP BY pais ORDER BY cantidad DESC LIMIT 1;',
    selectSuscripcionesMes: 'SELECT DATE_FORMAT(fechaDeSuscripcion, "%Y-%m") AS Anio, COUNT(usuarioID) AS CantidadUsuariosRegistrados FROM usuarios WHERE fechaDeSuscripcion IS NOT NULL AND fechaDeSuscripcion >= date_sub(curdate(), INTERVAL 12 MONTH) GROUP BY DATE_FORMAT(fechaDeSuscripcion, "%Y-%m") ORDER BY Anio;',
    selectTipoSuscripcion: 'SELECT SUM(tipoDeSuscripcion = 0) AS cantidadUsuarioFree, SUM(tipoDeSuscripcion = 1) AS cantidadUsuarioPremium FROM usuarios;',
}

export default adminQueries;