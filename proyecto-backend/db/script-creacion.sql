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
	password VARCHAR(100) not null,
	rolID INTEGER not null,
	activo tinyint,
	nombre VARCHAR(50),
	edad INTEGER,
	pais VARCHAR(50),
	idioma VARCHAR(50),
	fechaDeSuscripcion DATE,
	tipoDeSuscripcion tinyint,
	url_userImage VARCHAR(255),
	ulr_userBanner VARCHAR(255),
	primary key (usuarioID),
	constraint FK_usuarios_roles foreign key (rolID) references roles(rolID)
);

create table if not exists peliculas (
    peliculaID INTEGER auto_increment,
    titulo VARCHAR(100) not NULL,
    sinopsis TEXT not NULL,
    fechaEstreno DATE,
    duracion INTEGER,
    urlVideo VARCHAR(255),
    url_image VARCHAR(255) not NULL,
    url_image_delete VARCHAR(255) not NULL,
    display_url_image VARCHAR(255) not NULL,
    primary key (peliculaID)
);

create table if not exists generos (
    generoID INTEGER AUTO_INCREMENT,
    nombreGenero VARCHAR(50) NOT NULL,
    primary key (generoID)
);

create table if not exists actores (
    actorID INTEGER AUTO_INCREMENT,
    nombreActor VARCHAR(50) NOT NULL,
    primary key (actorID)
);

create table if not exists pelicula_generos (
    peliculaID INTEGER,
    generoID INTEGER,
    primary key (peliculaID, generoID),
    CONSTRAINT FK_GenPel_Pelicula FOREIGN KEY (peliculaID) REFERENCES peliculas(peliculaID),
    CONSTRAINT FK_GenPel_Genero FOREIGN KEY (generoID) REFERENCES generos(generoID)    
);

create table if not exists usuario_generos (
    usuarioID INTEGER,
    generoID INTEGER,
    primary key (usuarioID, generoID),
    CONSTRAINT FK_UserGen_Usuario FOREIGN KEY (usuarioID) REFERENCES usuarios(usuarioID),
    CONSTRAINT FK_UserGen_Genero FOREIGN KEY (generoID) REFERENCES generos(generoID)    
);


create table if not exists pelicula_actores (
    peliculaID INTEGER,
    actorID INTEGER,
    primary key (peliculaID, actorID),
    CONSTRAINT FK_ActPel_Pelicula FOREIGN KEY (peliculaID) REFERENCES peliculas(peliculaID),
    CONSTRAINT FK_ActPel_Actor FOREIGN KEY (actorID) REFERENCES actores(actorID)
);