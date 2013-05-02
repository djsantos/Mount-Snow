DROP TABLE IF EXISTS users;
CREATE TABLE users (
 	uid INTEGER PRIMARY KEY autoincrement,
	username VARCHAR(30) not null,
	password VARCHAR(30) not null,
	email VARCHAR(30) not null,
);
