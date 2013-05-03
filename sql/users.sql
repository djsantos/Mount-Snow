DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tweets;
DROP TABLE IF EXISTS follow;
CREATE TABLE users (uid INTEGER PRIMARY KEY autoincrement,username VARCHAR(30) not null,password VARCHAR(30) not null,email VARCHAR(30) not null);
CREATE TABLE tweets (uid INTEGER not null,username TEXT not null,message TEXT not null,time TIMESTAMP not null);
CREATE TABLE follow (uid INTEGER not null,theirID INTEGER not null);
