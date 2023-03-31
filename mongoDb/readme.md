Só conectar com a string de conexão
mongodb://admin:root@localhost:27017/e?authSource=admin

//First, execute the bash inside the container
docker exec -it your-cont-name bash

//Now we can login. For the admin
mongo -u admin -p root

//For the your_user you have to specify the db (with the --authenticationDatabase) otherwise you'll have an auth error
mongo -u your_user -p your_password --authenticationDatabase my_db
