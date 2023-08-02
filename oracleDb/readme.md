### Guia, tutorial utilizado

https://collabnix.com/how-to-run-oracle-database-in-a-docker-container-using-docker-compose/

## Passo a passo

### 1º criar conta na oracle

https://container-registry.oracle.com/

(OBS: não esquecer de aceitar os termos, logar ir até o container utilizado e aceiter os termos)

### 2° Executar o login no terminal

`docker login container-registry.oracle.com`

passar o user name e o token de autenticação

`jefersontavaressilva@gmail.com `

`dYSQs_YUGcduK10uri`

### 3º Configurar o tns names conforme exemplo

```
local=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521)))(CONNECT_DATA=(SERVER=DEDICATED)(SID=ORCLCDB)))
```
