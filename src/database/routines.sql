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
CREATE FUNCTION fnc_substituirVazio(termo_entrada VARCHAR(45))
	RETURNS VARCHAR(100)
	DETERMINISTIC
	BEGIN
		DECLARE termo_saida VARCHAR(100);
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
CREATE PROCEDURE cadastrar_livro(idUsuario INT, nome VARCHAR(45), autor VARCHAR(45), paginas INT, ano YEAR, editora VARCHAR(45), genero VARCHAR(45), isbn VARCHAR(45), sinopse VARCHAR(280))
	BEGIN
		INSERT INTO tb_livro_individual VALUES (default, idUsuario, nome, autor, paginas, ano, editora, genero, isbn, sinopse);
	END$$
DELIMITER ;

DELIMITER $$
DROP PROCEDURE IF EXISTS registrar_leitura;
CREATE PROCEDURE registrar_leitura(idLivro INT, idUsuario INT, paginasLidas INT, comentario VARCHAR(280))
	BEGIN
		INSERT INTO tb_leitura_diario VALUES (default, idLivro, idUsuario, paginasLidas, default, comentario);
	END$$
DELIMITER ;
