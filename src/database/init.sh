#!/bin/bash

read -p "Usuario: " user
read -s -p "Senha: " passwd

structure=$(cat structure.sql)
routines=$(cat routines.sql)
user=$(cat user.sql)

mysql -u"$user" -p"$passwd" <<EOF

$structure
$routines
$user

EOF
