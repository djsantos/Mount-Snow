create table users (
 	uid INTEGER PRIMARY KEY autoincrement,
	username VARCHAR(30),
	password VARCHAR(30),
	email VARCHAR(30),
);

create table tweets (
	uid INTEGER,
	message TEXT,
);

create table follow (
	uid INTEGER,
	theirID INTEGER,
);
