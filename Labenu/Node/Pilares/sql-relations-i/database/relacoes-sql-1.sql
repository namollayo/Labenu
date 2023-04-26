-- Active: 1680612786138@@127.0.0.1@3306

CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);


CREATE TABLE phones (
    id TEXT PRIMARY KEY NOT NULL,
    phone_number TEXT UNIQUE NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users
VALUES
    ("u001","nana","nanabanana@gmail.com","7777nana"),
    ("u002","lucy","nyulucy@gmail.com","nyu123");

INSERT INTO phones
VALUES
    ("p001", "55 11 999418215", "u001"),
    ("p002", "55 11 997477275", "u001"),
    ("p003", "55 45 985141484", "u002");

SELECT * FROM users;

SELECT * FROM phones;

SELECT * FROM users
INNER JOIN phones
ON phones.user_id = users.id; 

CREATE TABLE licenses (
    id TEXT PRIMARY KEY NOT NULL,
    register_number TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL
);

CREATE TABLE drivers (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    license_id TEXT UNIQUE NOT NULL,
    FOREIGN KEY (license_id) REFERENCES licenses(id)
);

DROP TABLE drivers;

INSERT INTO licenses (id, register_number, category)
    VALUES
        ("l001","123654789","A"),
        ("l002","654987123","AB");

INSERT INTO drivers (id, name, email, password, license_id) 
    VALUES  
        ("d001", "nana", "nanaseven@gmail.com", "nana123","l001" ),
        ("d002", "lucy", "lucynyu@gmail.com", "nyuu164","l002" );

SELECT * FROM licenses
INNER JOIN drivers
ON drivers.license_id = licenses.id;

SELECT 
    drivers.id,
    drivers.name,
    drivers.email,
    drivers.license_id,
    licenses.register_number
FROM drivers
INNER JOIN licenses
ON drivers.license_id = licenses.id;