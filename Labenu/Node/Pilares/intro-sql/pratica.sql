-- Active: 1680526987787@@127.0.0.1@3306

CREATE TABLE books (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    page_count INTEGER,
    price REAL NOT NULL);

SELECT* FROM books;

DROP TABLE books;

INSERT INTO books (id, name, author, page_count, price)
    VALUES ("8503012928", "1984", "George Orwell", 328, 24.95);

INSERT INTO books (id, name, author, price)
    VALUES("8578887239", "Leviathan", "Thomas Hobbes", 46.77);

UPDATE books 
    SET page_count = 688 
    WHERE id = "8578887239";

DELETE FROM books
    WHERE id = "8503012928";

CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL,
    status TEXT NOT NULL,
    topic TEXT,
    urgency TEXT
    );

SELECT* FROM tasks;

INSERT INTO tasks (task, status, topic, urgency)
    VALUES ("Do the dishes", "Done", "Home", NULL);

INSERT INTO tasks (task, status, topic, urgency)
    VALUES ("Study Node", "In Progress", "Studies", "Medium");

INSERT INTO tasks (task, status, topic, urgency)
    VALUES ("Apply for jobs on Linkedin", "To Start", "Job", "High");

DROP TABLE tasks;

UPDATE tasks
    SET status = "Done"
    WHERE id = "2";

DELETE FROM tasks
 WHERE id = "1";