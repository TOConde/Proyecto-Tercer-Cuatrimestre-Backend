const commonQueries = {
  selectAllMovies: 'select peliculaID, titulo, sinopsis, fechaEstreno, duracion, urlVideo, url_image, url_image_delete, display_url_image from peliculas;',
  selectMoviesById: 'select * from peliculas where peliculaID = ?;',

  deletePeliculaGenero: 'delete from pelicula_generos where peliculaID = ?;',
  deleteMovie: 'delete from peliculas where peliculaID = ?;',

  editMovie: 'update peliculas set titulo = ?, sinopsis = ?, fechaEstreno = ?, duracion = ?, urlVideo = ? where peliculaID = ?;',
}

export default commonQueries;