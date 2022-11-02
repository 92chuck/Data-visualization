CREATE DATABASE project;

CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  model VARCHAR(255) NOT NULL,
  body_type VARCHAR(255) NOT NULL,
  color VARCHAR(255) NOT NULL,
  year SMALLINT NOT NULL,
  price INT NOT NULL,
  FOREIGN KEY (companies_id) REFERENCES companies(id)
);

create table dealers (
  id BIGSERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(150) NOT NULL,
	gender VARCHAR(50) NOT NULL,
	date_of_birth DATE NOT NULL
);

CREATE TABLE customers (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(150) NOT NULL,
	gender VARCHAR(50) NOT NULL,
	date_of_birth DATE NOT NULL
);

INSERT INTO companies (name) VALUES ('BMW');
INSERT INTO companies (name) VALUES ('Audi');
INSERT INTO companies (name) VALUES ('Mercedes-Benz');

INSERT INTO cars (model, body_type, color, year, price) VALUES ('330i', 'coupe', 'red', 2022, 50000);

UPDATE dealers SET companies_id = 1 WHERE id = 1;
UPDATE dealers SET companies_id = 2 WHERE id = 2;
UPDATE dealers SET companies_id = 3 WHERE id = 3;
UPDATE dealers SET companies_id = 1 WHERE id = 4;


