const commonQueries = {
  selectAllMovies: 'select peliculaID, titulo, sinopsis, fechaEstreno, duracion, urlVideo, url_image, url_image_delete, display_url_image from peliculas where activo = 1;',
  selectMoviesById: 'SELECT * FROM peliculas WHERE peliculaID = ? AND activo = 1;',
  selectMoviesByTitulo: 'SELECT * FROM peliculas WHERE titulo LIKE CONCAT("%", ?, "%") AND activo = 1;',
  selectMoviesByGenero: 'SELECT p.* FROM peliculas p JOIN pelicula_generos pg ON p.peliculaID = pg.peliculaID JOIN generos g ON pg.generoID = g.generoID WHERE g.nombreGenero = ? AND p.activo = 1;',

  deletePeliculaGenero: 'delete from pelicula_generos where peliculaID = ?;',
  deleteMovie: 'UPDATE peliculas SET activo = 0 WHERE peliculaID = ?;',

  editMovie: 'update peliculas set titulo = ?, sinopsis = ?, fechaEstreno = ?, duracion = ?, urlVideo = ? where peliculaID = ?;',
}

export default commonQueries;