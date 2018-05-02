CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN DEFAULT 0 NOT NULL,
    date TIMESTAMP,
    PRIMARY KEY (id)
 );
 
