const adminQueries = {
    agregarPelicula: 'insert into peliculas (titulo, sinopsis, duracion, fechaEstreno, urlVideo, url_image, url_image_delete, display_url_image) values (?, ?, ?, ?, ?, ?, ?, ?)',
    agregarGeneroPelicula: 'insert into pelicula_generos (peliculaID, generoID) values (?, ?)',

    selectAllGeneros: 'select * from generos;'
}

export default adminQueries;