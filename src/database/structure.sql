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

CREATE TABLE tb_pontuacao_usuario(
	at_idPontuacao   INT AUTO_INCREMENT,
    at_fk_idUsuario  INT,
    at_pontuacao     INT,
    
    CONSTRAINT pkComposta_pontuacao_usuario
		PRIMARY KEY (at_idPontuacao, at_fk_idUsuario),
        
	CONSTRAINT fk_idUsuario_pontuacao_usuario
		FOREIGN KEY (at_fk_idUsuario)
			REFERENCES tb_usuario_leitor(at_idUsuario)
);

CREATE TABLE tb_streak_usuario(
	at_idStreak         INT       AUTO_INCREMENT,
    at_fk_idUsuario     INT,
    at_streak           INT,
    at_ultimo_registro  DATETIME  DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT pkComposta_pontuacao_usuario
		PRIMARY KEY (at_idStreak, at_fk_idUsuario),
        
	CONSTRAINT fk_idUsuario_streak_usuario
		FOREIGN KEY (at_fk_idUsuario)
			REFERENCES tb_usuario_leitor(at_idUsuario)
);

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
            
	CONSTRAINT fk_idUsuario_leitura
		FOREIGN KEY (at_fk_idUsuario)
			REFERENCES tb_livro_individual(at_fk_idUsuario)
);

CREATE TABLE tb_forum_interacao (
	at_idForum        INT           PRIMARY KEY AUTO_INCREMENT,
    at_fk_idUsuario   INT,
    at_topico         VARCHAR(45)   NOT NULL,
	at_data_criacao   DATETIME      DEFAULT CURRENT_TIMESTAMP,

	CONSTRAINT fk_idUsuario_forum
		FOREIGN KEY (at_fk_idUsuario)
			REFERENCES tb_usuario_leitor(at_idUsuario)
);

CREATE TABLE tb_comentario_forum (
	at_idComentario             INT           AUTO_INCREMENT,
	at_fk_idForum               INT,
    at_fk_idUsuario             INT,
    at_comentario               VARCHAR(280)  NOT NULL,
    at_curtidas                 INT           DEFAULT 0,
	at_data_postagem            DATETIME      DEFAULT CURRENT_TIMESTAMP,
	at_data_ultima_atualizacao  DATETIME      DEFAULT CURRENT_TIMESTAMP,

	CONSTRAINT pkComposta_comentario_forum
		PRIMARY KEY (at_idComentario, at_fk_idForum, at_fk_idUsuario),
        
	CONSTRAINT fk_idForum_comentario
		FOREIGN KEY (at_fk_idForum)
			REFERENCES tb_forum_interacao(at_idForum),
            
	CONSTRAINT fk_idUsuario_comentario
		FOREIGN KEY (at_fk_idUsuario)
			REFERENCES tb_usuario_leitor(at_idUsuario)
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
        
CREATE VIEW vw_livro AS
	SELECT
        at_fk_idUsuario    AS idUsuario,
		at_idLivro         AS idLivro,
        at_nome            AS nome,
        at_autor           AS autor,
        at_paginas_total   AS paginasTotal
    FROM
        tb_livro_individual;

CREATE VIEW vw_leitura AS
    SELECT
        at_fk_idUsuario   AS idUsuario,
        at_fk_idLivro     AS idLivro,
        at_idLeitura      AS idLeitura,
        at_paginas_lidas  AS paginasLidas,
        at_data_registro  AS dtRegistro,
        at_comentario     AS comentario
    FROM 
        tb_leitura_diario;

CREATE VIEW vw_sessao AS
    SELECT 
        at_idSessao          AS idSessao,
        at_fk_idUsuario      AS idUsuario,
        at_dataRegistro      AS dtRegistro,
        at_tempo_acumulado   AS tempo
    FROM
        tb_sessao_concentracao;

CREATE VIEW vw_status_livro_leitura AS
    SELECT
        livro.at_fk_idUsuario    AS idUsuario,
        livro.at_idLivro         AS idLivro,
        livro.at_nome            AS nome,
        livro.at_autor           AS autor,
        livro.at_paginas_total   AS paginasTotal,
        concat(round((SUM(leitura.at_paginas_lidas)/livro.at_paginas_total)*100, 0), '%') AS porcentagemLida,
        (CASE
			WHEN (SUM(leitura.at_paginas_lidas)/livro.at_paginas_total)*100 >= 100 THEN 'Concluído'
			WHEN (SUM(leitura.at_paginas_lidas)/livro.at_paginas_total)*100 = 0 THEN 'A começar'
            ELSE 'Em andamento'
		END) AS status
    FROM 
        tb_livro_individual AS livro
    JOIN
        tb_leitura_diario AS leitura
    ON 
        (livro.at_fk_idUsuario, livro.at_idLivro) = (leitura.at_fk_idUsuario, at_fk_idLivro)
    GROUP BY 1, 2;
    
CREATE VIEW vw_ranking AS
	SELECT 
		ROW_NUMBER() OVER ()   AS ranking, 
        at_fk_idUsuario        AS idUsuario, 
        at_Pontuacao           AS pontos
	FROM tb_pontuacao_usuario 
    ORDER BY 3 DESC;

CREATE VIEW vw_forum AS
	SELECT 
		at_idForum        AS idForum,
		at_fk_idUsuario   AS idUsuario,
		at_topico         AS topico,
		at_data_criacao   AS dtCriacao
	FROM tb_forum_interacao;
    
CREATE VIEW vw_comentario AS
	SELECT 
		at_idComentario             AS idComentario,
		at_fk_idForum               AS idForum,
		at_fk_idUsuario             AS idUsuario,
		at_comentario               AS comentario,
		at_curtidas                 AS curtidas,
		at_data_postagem            AS dtPostagem,
		at_data_ultima_atualizacao  AS dtAtualizacao
	FROM tb_comentario_forum;