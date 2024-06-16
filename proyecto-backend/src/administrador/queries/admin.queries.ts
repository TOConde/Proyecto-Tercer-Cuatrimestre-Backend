const adminQueries = {
    agregarPelicula: 'insert into peliculas (titulo, sinopsis, url_image, url_image_delete, display_url_image) values (?, ?, ?, ?, ?)'
}

export default adminQueries;