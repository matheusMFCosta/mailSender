FROM mysql:5.7.22

ENV MYSQL_ROOT_PASSWORD root  
ENV MYSQL_DATABASE mybooks  
ENV MYSQL_USER mybooks  
ENV MYSQL_PASSWORD root

ADD init_db.sql /docker-entrypoint-initdb.d
#COPY init_db.sql /docker-entrypoint-initdb.d
