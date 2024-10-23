# build image - docker build -t my-postgres .
# run image - docker run --name my-postgres -p 5432:5432 -d my-postgres
FROM postgres
ENV POSTGRES_DB mydb
ENV POSTGRES_USER myuser
ENV POSTGRES_PASSWORD mysecretpassword
COPY init.sql /docker-entrypoint-initdb.d/