-- liquibase formatted sql

-- changeset Baburam:Feature123
-- create table developer(
--     id int primary key,
--     first_name VARCHAR,
--     last_name VARCHAR,
--     email VARCHAR
-- );

-- changeset Baburam:Feature1234
-- insert into developer(id, first_name, last_name, email) VALUES (1, 'Baburam', 'Neupane', 'abc@gmail.com');


-- changeset Baburam:Feature12345
-- insert into developer(id, first_name, last_name, email) VALUES (2, 'Subodh', 'Tiwari', 'bcd@gmail.com');

-- changeset Baburam:DefaultSchemaForSpringSecurity
-- create table users(
--                       username varchar(50) not null primary key,
--                       password varchar(500) not null,
--                       enabled boolean not null
-- );

-- create table authorities (
--                              username varchar(50) not null,
--                              authority varchar(50) not null,
--                              constraint fk_authorities_users foreign key(username) references users(username)
-- );
-- create unique index ix_auth_username on authorities (username,authority);

-- changeset Baburam:insertSomeUsers
-- insert into users(username, password, enabled) values ('babu','admin', true);
-- insert into users(username, password, enabled) values ('ram','admin', true);

-- insert into authorities(username, authority) values ('babu', 'admin');

-- changeset Baburam:customTable
-- CREATE TABLE customer(
--                        id SERIAL PRIMARY KEY,
--                        email VARCHAR(255) NOT NULL,
--                        pwd VARCHAR(255) NOT NULL,
--                        role VARCHAR(45) NOT NULL
-- );
--
-- insert into customer(email, pwd, role) VALUES ('abc@gmail.com','admin','admin');

-- changeset Baburam:authorities
-- create table authorities(
--     id INT GENERATED ALWAYS AS IDENTITY,
--     customer_id INT,
--     name VARCHAR(50) NOT NULL,
--     PRIMARY KEY (id),
--     CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customer(id)
-- );

-- insert into authorities (customer_id, name) VALUES (1, 'VIEWACCOUNT');
-- insert into authorities (customer_id, name) VALUES (1, 'VIEWACARDS');
-- insert into authorities (customer_id, name) VALUES (1, 'VIEWLOANS');
--
-- changeset Baburam:appUser1
CREATE TABLE app_user(
                         id SERIAL PRIMARY KEY,
                         first_name VARCHAR(255) NOT NULL,
                         last_name VARCHAR(255) NOT NULL,
                         email VARCHAR(45) NOT NULL,
                         password VARCHAR(255) NOT NULL,
                         role VARCHAR(45) NOT NULL
);
