DROP DATABASE IF EXISTS appLerSaber;
CREATE DATABASE appLerSaber;
USE appLerSaber;

CREATE TABLE tb_usuario_leitor(
	at_idUsuario         INT           PRIMARY KEY AUTO_INCREMENT,
    at_nome              VARCHAR(45)   NOT NULL,
    at_username_apelido  VARCHAR(45)   NOT NULL UNIQUE,
    at_email             VARCHAR(45)   NOT NULL UNIQUE,
    at_senha             VARCHAR(100)  NOT NULL
) AUTO_INCREMENT = 1000;

CREATE TABLE tb_sessao_concentracao(
	at_idSessao        INT        AUTO_INCREMENT,
    at_fk_idUsuario    INT,
    at_dataRegistro    DATETIME   DEFAULT CURRENT_TIMESTAMP,
    at_tempo_acumulado TIME       NOT NULL,
    
    CONSTRAINT pkComposta_sessao_concentracao
		PRIMARY KEY (at_idSessao, at_fk_idUsuario),
        
	CONSTRAINT fk_idUsuario_sessao_concentracao
		FOREIGN KEY (at_fk_idUsuario)
			REFERENCES tb_usuario_leitor(at_idUsuario)
);

CREATE TABLE tb_livro_individual(
	at_idLivro        INT           AUTO_INCREMENT,
    at_fk_idUsuario   INT,
    at_nome           VARCHAR(45)   NOT NULL,
    at_autor          VARCHAR(45)   NOT NULL,
    at_paginas_total  INT           NOT NULL,
    at_ano            YEAR,
    at_editora        VARCHAR(45),
    at_genero         VARCHAR(45),
    at_isbn           VARCHAR(45),
    at_sinopse        VARCHAR(280),
    
    CONSTRAINT pkComposta_livro_individual
		PRIMARY KEY (at_idLivro, at_fk_idUsuario),
        
	CONSTRAINT fk_idUsuario_livro_individual
		FOREIGN KEY (at_fk_idUsuario)
			REFERENCES tb_usuario_leitor(at_idUsuario)
);

CREATE TABLE tb_leitura_diario (
	at_idLeitura      INT           AUTO_INCREMENT,
    at_fk_idLivro     INT,
    at_fk_idUsuario   INT,
    at_paginas_lidas  INT           NOT NULL,
	at_data_registro  DATETIME      DEFAULT CURRENT_TIMESTAMP,
	at_comentario     VARCHAR(280),

	CONSTRAINT pkComposta_leitura_diario
		PRIMARY KEY (at_idLeitura, at_fk_idLivro, at_fk_idUsuario),
        
	CONSTRAINT fk_idLivro
		FOREIGN KEY (at_fk_idLivro)
			REFERENCES tb_livro_individual(at_idLivro),
            
	CONSTRAINT fk_idUsuario
		FOREIGN KEY (at_fk_idUsuario)
			REFERENCES tb_livro_individual(at_fk_idUsuario)
);

CREATE VIEW vw_usuario AS
	SELECT
		at_idUsuario         AS id,
        at_nome              AS nome,
        at_username_apelido  AS username,
        at_email             AS email,
        at_senha             AS senha
	FROM
		tb_usuario_leitor;
