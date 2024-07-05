insert into roles (codigo, nombre) values ('ADM', 'Administrador');
insert into roles (codigo, nombre) values ('USR', 'Usuario');

insert into usuarios (email, password, activo, rolID) values ('flixoramaADM@flix.com', '$2a$08$W59jWcwio1TiLx4A8iRyTO1wuDadbtY2pxU5q18RDi6yNWAYyJqXS', 1, 1); /* admin */
insert into usuarios (email, password, activo, rolID) values ('user1@user.com', '$2a$08$W59jWcwio1TiLx4A8iRyTORC812pGR2a3LhlreiFYWLwkDdjEdHxq', 1, 2);/* 123456 */

insert into generos(nombreGenero) values ('Acción'), ('Aventura'), ('Comedia'), ('Drama'), ('Fantasia'), ('Ciencia Ficción'), ('Terror'), ('Suspenso'), ('Romance'), ('Animación'), ('Documental'), ('Western'), ('Misterio'), ('Crimen'), ('Bélico');

insert into peliculas (titulo, sinopsis, fechaEstreno, duracion, urlVideo, url_image, url_image_delete, display_url_image) values 
('Band of Brothers', '“Band Of Brothers” narra la historia de la Easy Company, un batallón americano del regimiento 506 de paracaidistas que luchó en Europa durante la II Guerra Mundial.', '1998-05-23', 50, 'https://www.youtube.com/embed/KKRBAFlN5ww', 'https://i.ibb.co/RDTYy9H/Band-of-Brothers.png', 'https://ibb.co/TgMYLkh/b0bcae36a466af13a7a800334f7ebdde', 'https://i.ibb.co/RDTYy9H/Band-of-Brothers.png'),
('The Truman Show', 'Truman Burbank, un feliz agente de seguros, cree llevar una vida normal, pero no tiene idea de que las cámaras lo graban las 24 horas y que todo lo que hace se ve en televisión.', '1998-02-27', 128, 'https://www.youtube.com/embed/dlnmQbPGuls', 'https://i.ibb.co/7gbG6cF/The-Truman-Show.png', 'https://ibb.co/1sb9wVx/9af7a2f4570bd99451e2b4e6bad38442', 'https://i.ibb.co/7gbG6cF/The-Truman-Show.png'),
('Blade Runner 2049', 'En el año 2049 el oficial K, un nuevo replicante de la policía de Los Ángeles, emprende la búsqueda del replicante Rick Deckard, desaparecido 30 años antes. K piensa que en Deckard reside la clave que podría permitir salvar a la sociedad del caos en el que está inmersa.', '2017-05-27', 103, 'https://www.youtube.com/embed/gCcx85zbxz4', 'https://i.ibb.co/2qxY4Kw/Blade-Runner.png', 'https://ibb.co/JnVFJkN/b636350468d4518c55648ca50fbb0067', 'https://i.ibb.co/2qxY4Kw/Blade-Runner.png'),
('John Wick 2', 'El legendario sicario John Wick abandona su retiro cuando, debido a un pacto de sangre que le vincula a un colega, se ve obligado a viajar a Roma para enfrentarse a los asesinos más peligrosos del mundo.', '2017-06-05', 122, 'https://www.youtube.com/embed/XGk2EfbD_Ps', 'https://i.ibb.co/BP2Nwc1/John-Wick-2.png', 'https://ibb.co/X4x8Vjw/ade986fccd6cb3c724eecc8d2c6eb1c7', 'https://i.ibb.co/BP2Nwc1/John-Wick-2.png'),
('Pulp Fiction', 'La vida de un boxeador, dos sicarios, la esposa de un gánster y dos bandidos se entrelaza en una historia de violencia y redención.', '1994-06-02', 150, 'https://www.youtube.com/embed/tGpTpVyI_OQ', 'https://i.ibb.co/sqmjQNY/Pulp-Fiction.png', 'https://ibb.co/m4DJt2W/28712da164bd8fe108e4956b1b1f7ec9', 'https://i.ibb.co/sqmjQNY/Pulp-Fiction.png');

INSERT INTO  pelicula_generos(peliculaID, generoID) VALUES (1, 1), (1, 15), (2, 3), (2, 4), (3, 6), (3, 4), (3, 1), (4, 1), (4, 2), (4, 14), (4, 4), (5, 1), (5, 4), (5, 14), (5, 8);


SELECT p.titulo, g.nombreGenero
FROM peliculas p
JOIN pelicula_generos pg ON p.peliculaID = pg.peliculaID
JOIN generos g ON pg.generoID = g.generoID
ORDER BY p.titulo, g.nombreGenero; -- Para mirar los generos que tienen cada pelicula