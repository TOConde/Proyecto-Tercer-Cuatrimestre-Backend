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

insert into roles (codigo, nombre) values ('ADM', 'Administrador');
insert into roles (codigo, nombre) values ('USR', 'Usuario');

insert into usuarios (email, password, activo, rolID) values ('flixoramaADM@flix.com', 'admin', 1, 1);

select * from usuarios;

select * from roles;