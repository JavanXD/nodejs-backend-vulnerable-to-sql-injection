# Setup
## MySql Database
With Docker:
1. Create MySql Container

    `docker run -p 3306:3306 --name mysql_db_server -e MYSQL_ROOT_PASSWORD=admin123 -d mysql:5`
 
2. Create a linked PhpMyAdmin Container

    `docker run --name myadmin -d --link mysql_db_server:db -p 8080:80 phpmyadmin/phpmyadmin`
3. Import ``./database/users.sql`` to your local database.
3. Change ``datebase, host, etc.`` in ``./database/mysql.js``

## Run NodeJS server
    nodemon server.js


- PhpMyAdmin runs at `http://192.168.99.100:8080`
- MySql runs at `192.168.99.100:3306`
- NodeJS server runs at ``http://localhost:3000``
