insert into roles (codigo, nombre) values ('ADM', 'Administrador');
insert into roles (codigo, nombre) values ('USR', 'Usuario');

insert into usuarios (email, password, activo, rolID) values ('flixoramaADM@flix.com', '$2a$08$W59jWcwio1TiLx4A8iRyTO1wuDadbtY2pxU5q18RDi6yNWAYyJqXS', 1, 1); /* admin */
insert into usuarios (email, password, activo, rolID) values ('user1@user.com', '$2a$08$W59jWcwio1TiLx4A8iRyTORC812pGR2a3LhlreiFYWLwkDdjEdHxq', 1, 2);/* 123456 */

insert into generos(nombreGenero) values ('Acción'), ('Aventura'), ('Comedia'), ('Drama'), ('Fantasia'), ('Ciencia Ficción'), ('Terror'), ('Suspenso'), ('Romance'), ('Animación'), ('Documental'), ('Western'), ('Misterio'), ('Crimen'), ('Bélico');

insert into peliculas (titulo, sinopsis, fechaEstreno, duracion, urlVideo, url_image, url_image_delete, display_url_image) values 
('Band of Brothers', 'Vacaciones en Normandia', '1998-05-23', 50, 'https://www.youtube.com/watch?v=KKRBAFlN5ww', 'https://i.ibb.co/RDTYy9H/Band-of-Brothers.png', 'https://ibb.co/TgMYLkh/b0bcae36a466af13a7a800334f7ebdde', 'https://i.ibb.co/RDTYy9H/Band-of-Brothers.png'),
('The Truman Show', 'Todos mienten', '1998-02-27', 128, 'https://www.youtube.com/watch?v=dlnmQbPGuls', 'https://i.ibb.co/7gbG6cF/The-Truman-Show.png', 'https://ibb.co/1sb9wVx/9af7a2f4570bd99451e2b4e6bad38442', 'https://i.ibb.co/7gbG6cF/The-Truman-Show.png'),
('Blade Runner 2049', 'Doh\w Robots', '2017-05-27', 103, 'https://www.youtube.com/watch?v=gCcx85zbxz4', 'https://i.ibb.co/2qxY4Kw/Blade-Runner.png', 'https://ibb.co/JnVFJkN/b636350468d4518c55648ca50fbb0067', 'https://i.ibb.co/2qxY4Kw/Blade-Runner.png'),
('John Wick 2', 'Muchos tiros y me mataron al perro', '2017-06-05', 122, 'https://www.youtube.com/watch?v=XGk2EfbD_Ps', 'https://i.ibb.co/BP2Nwc1/John-Wick-2.png', 'https://ibb.co/X4x8Vjw/ade986fccd6cb3c724eecc8d2c6eb1c7', 'https://i.ibb.co/BP2Nwc1/John-Wick-2.png'),
('Pulp Fiction', 'La liga Tarantino siempre', '1994-06-02', 150, 'https://www.youtube.com/watch?v=tGpTpVyI_OQ', 'https://i.ibb.co/sqmjQNY/Pulp-Fiction.png', 'https://ibb.co/m4DJt2W/28712da164bd8fe108e4956b1b1f7ec9', 'https://i.ibb.co/sqmjQNY/Pulp-Fiction.png');

INSERT INTO  pelicula_generos(peliculaID, generoID) VALUES (1, 1), (1, 15), (2, 3), (2, 4), (3, 6), (3, 4), (3, 1), (4, 1), (4, 2), (4, 14), (4, 4), (5, 1), (5, 4), (5, 14), (5, 8);


SELECT p.titulo, g.nombreGenero
FROM peliculas p
JOIN pelicula_generos pg ON p.peliculaID = pg.peliculaID
JOIN generos g ON pg.generoID = g.generoID
ORDER BY p.titulo, g.nombreGenero; -- Para mirar los generos que tienen cada pelicula