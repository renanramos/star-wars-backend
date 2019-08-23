# Star Wars Backend

Após feito o download do projeto, basta acessar a raíz e abrir em seu editor de código de preferência.

## instalando

Para instalar as dependências do projeto é preciso executar o comando a seguir:

<code>npm i</code>

Desta forma será instaladas as dependências do projeto.

### configuração do banco de dados

O projeto foi desenvolvido utilizando como database o <b> Mysql 8.0.17 </b>.</br>
Abaixo segue o script de criação da tabela e campos.

<code>
    CREATE TABLE `my-db`.`user` (
    
        `user_id` int(11) NOT NULL AUTO_INCREMENT,
        
        `user_name` varchar(45) NOT NULL,       
        
        `user_password` varchar(45) NOT NULL,    
        
        PRIMARY KEY (`user_id`),
        
        UNIQUE KEY `user_id_UNIQUE` (`user_id`)
        
    ) ;
</code>

Obs.: my-db é o nome do schema que utilizei no desenvolvimento. Altere-o de acordo com sua base de dados.

## executando

Após ter as dependências instaladas, agora execute o comando abaixo:

<code> npm start </code>
