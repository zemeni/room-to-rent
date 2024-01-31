-- liquibase formatted sql

-- changeset Baburam:Feature123
create table info(
    id int primary key,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR
);

-- changeset Baburam:Feature1234
insert into info(id, first_name, last_name, email) VALUES (1, 'Baburam', 'Neupane', 'abc@gmail.com');


-- changeset Baburam:Feature12345
insert into info(id, first_name, last_name, email) VALUES (2, 'Subodh', 'Tiwari', 'bcd@gmail.com');