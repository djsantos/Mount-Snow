function ChatClient(config) {
    	for (var prop in config) {
			this[prop] = config[prop];
		}
	}

	ChatClient.prototype = {
	// An cache of posts received from server.
	posts : [],

	// Start polling the server.
	poll : function () {
		var that = this;
		this._stop = setInterval(function () {
			that.check();
            }, 3000);
	},

	// Stop polling this server.
	pollStop : function () {
		clearInterval(this._stop);
	},

	// Post text to the server.
	post : function (text) {
		$.ajax({
			type : 'POST',
			url  : '/post',
			data : { 'text' : text },
			dataType : 'json'
		}).done(function (data) {
			console.log('Post status: ' + data.status);
		});
	},

	// Check for more messages on the server
	// given the last index we have for the
	// current posts.
	check : function () {
		var that = this;		
		$.ajax({
			type : 'POST',
			url  : '/check',
			data : { last : that.posts.length },
			dataType : 'json'
		}).done(function (data) {
			console.log('Check rcvd: ' + JSON.stringify(data));

			// Append the posts to the current posts:
			that.posts = that.posts.concat(data);

			// Rewrite to the view:
			that.view.empty();
			/*for (var i = 0; i < that.posts.length; i++) {
				var li   = $('<li>');
				li.html(username + ': ' + '<span class="tweet">' + that.posts[i].text + '</span>');
				that.view.append(li);
			}*/
			
		});
		
	}	
};

// jQuery ready handler:
$(function () {
    // Get the list view that the chat client
	// will populate with incoming messages:	
	var chatc = new ChatClient({ view : $('ul#tweets') });

	// Start polling:
	chatc.poll();

	// Setup the post button:
	var postb = new PostButton({
		view  : $('input.tweetButton'),
	});

	// Bind a click event:
	postb.bind('click', function (event) {
		console.log(this);
		var text = this.input.val();
		chatc.post(text);
        
		// clear input text:
		this.input.val('Compose a new tweet...');
		$('input.tweetButton').hide();
		alert('Tweet successfully posted');
		return false;
	});

});


