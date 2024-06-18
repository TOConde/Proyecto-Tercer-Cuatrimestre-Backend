const adminQueries = {
    agregarPelicula: 'insert into peliculas (titulo, sinopsis, duracion, fechaEstreno, url_image, url_image_delete, display_url_image) values (?, ?, ?, ?, ?, ?, ?)',

    selectAllGeneros: 'select * from generos;'
}

export default adminQueries;