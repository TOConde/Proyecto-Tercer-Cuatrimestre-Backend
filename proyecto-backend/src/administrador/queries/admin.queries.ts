const adminQueries = {
    agregarPelicula: 'insert into peliculas (titulo, sinopsis, duracion, fechaEstreno, urlVideo, url_image, url_image_delete, display_url_image, activo) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    agregarGeneroPelicula: 'insert into pelicula_generos (peliculaID, generoID) values (?, ?)',
    eliminarGeneroPelicula: 'DELETE FROM pelicula_generos WHERE peliculaID = ? AND generoID NOT IN (?)',

    selectAllGeneros: 'select * from generos;',
    selectGenerosById: 'SELECT p.peliculaID, p.titulo, g.generoID, g.nombreGenero FROM peliculas p JOIN pelicula_generos pg ON p.peliculaID = pg.peliculaID JOIN generos g ON pg.generoID = g.generoID WHERE p.peliculaID = ?;'
}

export default adminQueries;
