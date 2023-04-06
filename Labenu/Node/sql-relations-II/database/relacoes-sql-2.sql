-- Active: 1680784260340@@127.0.0.1@3306

-- Práticas
CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL, 
    password TEXT NOT NULL, 
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users (id, name, email, password)
    VALUES
        ("u001","marcelo","marcelo@email.com","marcelo123"),
        ("u002","lau","lau@email.com","lau123"),
        ("u003","clara","clara@email.com","clara123");

SELECT * FROM users;

CREATE TABLE follows (
    follower_id TEXT NOT NULL,
    followed_id TEXT NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followed_id) REFERENCES users(id)
);

INSERT INTO follows (follower_id, followed_id)
    VALUES
("u001", "u002"),
("u001", "u003"),
("u002", "u001");

SELECT * FROM follows;

SELECT * FROM users
INNER JOIN follows
ON follows.follower_id = users.id;

SELECT * FROM users
RIGHT JOIN follows
ON follows.follower_id = users.id;

SELECT * FROM users
LEFT JOIN follows
ON follows.follower_id = users.id;

SELECT * FROM users
LEFT JOIN follows
ON follows.follower_id = users.id;

SELECT * FROM users
LEFT JOIN follows
ON follows.follower_id = users.id
INNER JOIN users AS usersFollowed
ON follows.followed_id = usersFollowed.id;

SELECT 
    users.id AS userId,
    users.name AS userName,
    users.email,
    users.created_at,
    follows.follower_id as followerId,
    follows.followed_id as followedId,
    usersFollowed.name as followedName
FROM users
LEFT JOIN follows
ON follows.follower_id = users.id
INNER JOIN users AS usersFollowed
ON follows.followed_id = usersFollowed.id;




