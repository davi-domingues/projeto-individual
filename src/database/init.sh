#!/bin/bash

read -p "Usuario: " usersql
read -s -p "Senha: " passwd

structure=$(cat structure.sql)
routines=$(cat routines.sql)
user=$(cat user.sql)

mysql -u"$usersql" -p"$passwd" <<EOF

$structure
$routines
$user

EOF
