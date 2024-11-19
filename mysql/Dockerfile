FROM mariadb:5.5

ENV MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
ENV MYSQL_DATABASE=${MYSQL_DATABASE}
ENV MYSQL_USER=${MYSQL_USER}
ENV MYSQL_PASSWORD=${MYSQL_PASSWORD}

COPY 01-mcb-dump.sql /docker-entrypoint-initdb.d/

COPY my.cnf /etc/mysql/conf.d/

RUN chmod 644 /etc/mysql/conf.d/my.cnf

RUN echo "Executing 01-mcb-dump.sql" && cat /docker-entrypoint-initdb.d/01-mcb-dump.sql

EXPOSE 3306
