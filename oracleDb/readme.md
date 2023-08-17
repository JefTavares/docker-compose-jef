### Guia, tutorial utilizado

https://collabnix.com/how-to-run-oracle-database-in-a-docker-container-using-docker-compose/

## Passo a passo

### 1º criar conta na oracle

https://container-registry.oracle.com/

(OBS: não esquecer de aceitar os termos, logar ir até o container utilizado e aceiter os termos)

### 2° Executar o login no terminal

`docker login container-registry.oracle.com`

passar o user name e o token de autenticação

`jefersontavaressilva@gmail.com`

`dYSQs_YUGcduK10uri`

### 3º Configurar o tns names conforme exemplo

```
local=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521)))(CONNECT_DATA=(SERVER=DEDICATED)(SID=ORCLCDB)))
```

### 4º Administração do banco

docker exec -it <oracle-db> sqlplus / as sysdba

### 5º Criado o bando de dados (schema)

https://www.techonthenet.com/oracle/schemas/create_schema.php
alter session set "\_ORACLE_SCRIPT"=true;

CREATE TABLESPACE jefxs3
DATAFILE 'jefxs3.dat'
SIZE 1000M
AUTOEXTEND ON
ONLINE;

CREATE USER jefxs3 IDENTIFIED BY jefxs3 DEFAULT tablespace jefxs3;

GRANT create session TO jefxs3;
GRANT create table TO jefxs3;
GRANT create view TO jefxs3;
GRANT create any trigger TO jefxs3;
GRANT create any procedure TO jefxs3;
GRANT create sequence TO jefxs3;
GRANT create synonym TO jefxs3;
GRANT UNLIMITED TABLESPACE TO JEFXS3;
