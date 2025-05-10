CREATE DATABASE appLerSaber;
USE appLerSaber;

CREATE TABLE usuario(
	idUsuario    INT          PRIMARY KEY AUTO_INCREMENT,
    nome         VARCHAR(45)  NOT NULL,
    username     VARCHAR(45)  NOT NULL UNIQUE,
    email        VARCHAR(45)  NOT NULL UNIQUE,
    senha        VARCHAR(45)  NOT NULL
) AUTO_INCREMENT = 1000;