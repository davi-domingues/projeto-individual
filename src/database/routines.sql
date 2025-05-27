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
DROP PROCEDURE IF EXISTS cadastrar_usuario;
CREATE PROCEDURE cadastrar_usuario(nome VARCHAR(45), username VARCHAR(15), email VARCHAR(45), senha VARCHAR(20))
	BEGIN
		INSERT INTO tb_usuario_leitor VALUES (default, nome, username, email, fnc_criptografar(senha));
	END$$
DELIMITER ;





