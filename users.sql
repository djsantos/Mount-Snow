CREATE TABLE users (
 	uid INTEGER PRIMARY KEY autoincrement,
	username VARCHAR(30),
	password VARCHAR(30),
	email VARCHAR(30),
);

CREATE TABLE tweets (
	uid INTEGER,
	message TEXT,
);

CREATE TABLE follow (
	uid INTEGER,
	theirID INTEGER,
);
