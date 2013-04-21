create table users (
 uid integer primary key autoincrement,
	username varchar(255) not null,
	password varchar(255) not null,
	email varchar(255) not null,
);
