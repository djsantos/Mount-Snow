DROP TABLE IF EXISTS users
DROP TABLE IF EXISTS tweets
DROP TABLE IF EXISTS follow


CREATE TABLE users (
 	uid INTEGER PRIMARY KEY autoincrement,
	username VARCHAR(30),
	password VARCHAR(30),
	email VARCHAR(30),
);

CREATE TABLE tweets (
	uid INTEGER,
	username TEXT,
	message TEXT,
);

CREATE TABLE follow (
	uid INTEGER,
	theirID INTEGER,
);
