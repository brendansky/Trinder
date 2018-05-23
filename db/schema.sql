DROP DATABASE IF EXISTS trinderDB;

CREATE DATABASE trinderDB;

USE trinderDB;

CREATE TABLE users (
    `id` INTEGER(10) AUTO_INCREMENT NOT NULL,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `address` VARCHAR(250) NOT NULL,
    `state` VARCHAR(100) NOT NULL,
    `zip_code` INTEGER(10) NOT NULL,
    `email`INTEGER(10),
    `phone_number` INTEGER(10) NOT NULL,
    PRIMARY KEY (id)
    );

CREATE TABLE inventory (
    `id` INTEGER(10) AUTO_INCREMENT NOT NULL, 
    `product_name` VARCHAR(100) NOT NULL,
    `product_ pricerange` INTEGER(10),
    `product_description` VARCHAR(100),
    `product_condition`  INTEGER(10),
    `image_1`VARCHAR(100),
    `image_2`VARCHAR(100),
    `image_3`VARCHAR(100),
    PRIMARY KEY (id)
    );

