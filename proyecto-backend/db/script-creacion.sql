create schema if not exists flixoramadb;

use flixoramadb;

create table if not exists roles (
	rolID INTEGER auto_increment,
	codigo VARCHAR(3),
	nombre VARCHAR(50),
	primary key (rolID)
);

create table if not exists usuarios (
	usuarioID INTEGER auto_increment,
	email VARCHAR(256) not null,
	password VARCHAR(100),
	activo tinyint, 
	rolID INTEGER,
	primary key (usuarioID),
	constraint FK_usuarios_roles foreign key (rolID) references roles(rolID)
);

select * from usuarios;

select * from roles;

create table if not exists peliculas (
	peliculaID INTEGER auto_increment,
	titulo VARCHAR(100),
	sinopsis VARCHAR(500),
	url_image VARCHAR NULL,
	url_image_delete VARCHAR NULL,
	display_url_image VARCHAR NULL,
	primary key (peliculaID)
)