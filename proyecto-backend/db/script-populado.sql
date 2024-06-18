insert into roles (codigo, nombre) values ('ADM', 'Administrador');
insert into roles (codigo, nombre) values ('USR', 'Usuario');

insert into usuarios (email, password, activo, rolID) values ('flixoramaADM@flix.com', '$2a$08$W59jWcwio1TiLx4A8iRyTO1wuDadbtY2pxU5q18RDi6yNWAYyJqXS', 1, 1); /* admin */
insert into usuarios (email, password, activo, rolID) values ('user1@user.com', '$2a$08$W59jWcwio1TiLx4A8iRyTORC812pGR2a3LhlreiFYWLwkDdjEdHxq', 1, 2);/* 123456 */

insert into generos(nombreGenero) values ('Acción'), ('Aventura'), ('Comedia'), ('Drama'), ('Fantasia'), ('Ciencia Ficción'), ('Terror'), ('Suspenso'), ('Romance'), ('Animación'), ('Documental'), ('Western'), ('Misterio'), ('Crimen'), ('Bélico');
