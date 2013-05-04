/*
*@module lib/search
*/

var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('./data/temp.db');
/*exports lib/search functions
*/
module.exports = {
	findResults:findResults
};

/*
*Returns an array of arbitrary data currently to represent
*the username, timestamp, and message of each tweet.
*@param requestParam passes the submited result querey.
*/
function findResults(requestParam){
	//this should be the query for searching for tweets, replacing the same of the table should give you the query for finding a user
	//db.get("Select * from TweetTable like % ? %", requestParam);
	//db.get("Select * from UserTable like % ? %", requestParam);

	var result = [ 
	'Name_1','Time_1','Message_1',
	'Name_2','Time_2','Message_2',
	'Name_3','Time_3','Message_3',
	'Name_4','Time_4','Message_4',
	'Name_5','Time_5','Message_5',
	'Name_6','Time_6','Message_6',
	'Name_7','Time_7','Message_7',
	'Name_8','Time_8','Message_8',
	'Name_9','Time_9','Message_9',
	'Name_10','Time_10','Message_10',
	'Name_11','Time_11','Message_11',
	'Name_12','Time_12','Message_12',
	'Name_13','Time_13','Message_13',
	'Name_14','Time_14','Message_14',
	'Name_15','Time_15','Message_15',
	'Name_16','Time_16','Message_16',
	'Name_17','Time_17','Message_17',
	'Name_18','Time_18','Message_18',
	'Name_19','Time_19','Message_19',
	'Name_20','Time_20','Message_20',
	'Name_21','Time_21','Message_21',
	'Name_22','Time_22','Message_22',
	'Name_23','Time_23','Message_23',
	'Name_24','Time_24','Message_24',
	'Name_25','Time_25','Message_25',
	'Name_26','Time_26','Message_26',
	'Name_27','Time_27','Message_27',
	'Name_28','Time_28','Message_28',
	'Name_29','Time_29','Message_29',
	'Name_30','Time_30','Message_30',
	'Name_31','Time_31','Message_31',
	'Name_32','Time_32','Message_32',
	'Name_33','Time_33','Message_33',
	'Name_34','Time_34','Message_34',
	'Name_35','Time_35','Message_35',
	'Name_36','Time_36','Message_36',
	'Name_37','Time_37','Message_37',
	'Name_38','Time_38','Message_38',
	'Name_39','Time_39','Message_39',
	'Name_40','Time_40','Message_40',
	];
	return result;
}