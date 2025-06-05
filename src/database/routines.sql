DELIMITER $$
DROP FUNCTION IF EXISTS fnc_criptografar;
CREATE FUNCTION fnc_criptografar(termo_entrada VARCHAR(45))
	RETURNS VARCHAR(100)
	DETERMINISTIC
	BEGIN
		DECLARE termo_saida VARCHAR(100);
		SET termo_saida = sha2(termo_entrada, 0);
		RETURN termo_saida;
	END$$
DELIMITER ;

DELIMITER $$
DROP FUNCTION IF EXISTS fnc_substituirVazio;
CREATE FUNCTION fnc_substituirVazio(termo_entrada VARCHAR(300))
	RETURNS VARCHAR(100)
	DETERMINISTIC
	BEGIN
		DECLARE termo_saida VARCHAR(300);
		SET termo_saida = 
			(CASE 
				WHEN termo_entrada = '' THEN null
				ELSE termo_entrada
			END)
		;
		RETURN termo_saida;
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS cadastrar_usuario;
CREATE PROCEDURE cadastrar_usuario(nome VARCHAR(45), username VARCHAR(15), email VARCHAR(45), senha VARCHAR(20))
	BEGIN
		INSERT INTO tb_usuario_leitor VALUES (default, nome, username, email, fnc_criptografar(senha));
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS cadastrar_livro;
CREATE PROCEDURE cadastrar_livro(idUsuario INT, nome VARCHAR(45), autor VARCHAR(45), paginas INT)
	BEGIN
		INSERT INTO tb_livro_individual VALUES (default, idUsuario, nome, autor, paginas);
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS registrar_leitura;
CREATE PROCEDURE registrar_leitura(idLivro INT, idUsuario INT, paginasLidas INT, comentario VARCHAR(280))
	BEGIN
		INSERT INTO tb_leitura_diario VALUES (default, idLivro, idUsuario, paginasLidas, default, comentario);
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS registrar_sessao;
CREATE PROCEDURE registrar_sessao(idUsuario INT, tempo TIME)
	BEGIN
		INSERT INTO tb_sessao_concentracao VALUES (default, idUsuario, default, tempo);
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS adicionar_pontuacao;
CREATE PROCEDURE adicionar_pontuacao(idUsuario INT, pontuacao INT)
	BEGIN
		DECLARE pontuacao_antiga INT;
        SET pontuacao_antiga = (SELECT at_Pontuacao FROM tb_pontuacao_usuario WHERE at_fk_idUsuario = idUsuario);
        UPDATE tb_pontuacao_usuario SET at_Pontuacao = (pontuacao + pontuacao_antiga) WHERE at_fk_idUsuario = idUsuario;
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS iniciar_pontuacao;
CREATE PROCEDURE iniciar_pontuacao(idUsuario INT)
	BEGIN
		INSERT INTO tb_pontuacao_usuario VALUES (default, idUsuario, 0);
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS buscar_livros_concluidos;
CREATE PROCEDURE buscar_livros_concluidos(idUsuarioBusca INT)
	BEGIN
		SELECT COUNT(idLivro) AS livrosLidos FROM vw_status_livro_leitura WHERE idUsuario = idUsuarioBusca GROUP BY status HAVING status = 'Concluído';
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS iniciar_streak;
CREATE PROCEDURE iniciar_streak(idUsuario INT)
	BEGIN
		INSERT INTO tb_streak_usuario VALUE (default, idUsuario, 0, null);
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS atualizar_streak;
CREATE PROCEDURE atualizar_streak(idUsuario INT)
	BEGIN
		UPDATE tb_streak_usuario SET 
			at_streak =
				(CASE
					WHEN DATE(at_ultimo_registro) = DATE(CURRENT_TIMESTAMP) THEN at_streak
					WHEN DATE(at_ultimo_registro) + 1 = DATE(CURRENT_TIMESTAMP) THEN at_streak + 1 
					ELSE 1 
				END),
			at_ultimo_registro = CURRENT_TIMESTAMP
		WHERE at_fk_idUsuario = idUsuario;
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS buscar_streak;
CREATE PROCEDURE buscar_streak(idUsuario INT)
	BEGIN
		SELECT 
			(CASE
				WHEN DATE(at_ultimo_registro) = DATE(CURRENT_TIMESTAMP) THEN at_streak
                ELSE 0
            END) AS streakPositivo,
			(CASE
				WHEN DATE(at_ultimo_registro) < DATE(CURRENT_TIMESTAMP) THEN DATEDIFF(CURRENT_TIMESTAMP, at_ultimo_registro)
                ELSE 0
            END) AS streakNegativo
		FROM tb_streak_usuario
		WHERE at_fk_idUsuario = idUsuario;
	END$$
DELIMITER ;
