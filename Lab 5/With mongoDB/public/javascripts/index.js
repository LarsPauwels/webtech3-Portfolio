class Message {
	constructor() {
		this.getMessage();
	}

	getMessage() {
		let url = `http://localhost:3000/api/v1/messages`;
		fetch(url, {
			method: 'get'
		}).then(response => {
			return response.json();
		}).then(json => {
			this.addMessage(json);
		}).catch(err => {
			console.log("Message: " + err);
		});
	}

	addMessage(json) {
		let messagesChat = document.querySelector(".messages-chat");
		messagesChat.innerHTML = "";
		for (var i = 0; i < json.message.length; i++) {
			let messageText = json.message[i].text;
			let username = json.message[i].user;
			let timestamp = json.message[i].timestamp;

			if (username == getCookie("user")) {
				this.getOwnMessage(username, messageText, timestamp, messagesChat);
			} else {
				this.getOtherMessages(username, messageText, timestamp, messagesChat);
			}
		}
	}

	getOwnMessage(user, messageText, timestamp, messagesChat) {
		messagesChat.innerHTML += 
			`<div class="message text-only responseMessage">
				<div class="response">
            		<p class="text">${user}: ${messageText}</p>
          		</div>
          	</div>
          	<p class="response-time time">${timestamp}</p>`;
	}

	getOtherMessages(user, messageText, timestamp, messagesChat) {
		messagesChat.innerHTML += 
			`<div class="message">
            	<div class="photo" style="background-image: url(https://www.startupdelta.org/wp-content/uploads/2018/04/No-profile-LinkedIn.jpg);">
              		<div class="online"></div>
            	</div>
            	<p class="text">${user}: ${messageText}</p>
          	</div>
          	<p class="time">${timestamp}</p>`;
	}

	getCurrentTime() {
		let d = new Date();
		let hour = d.getHours();
		let minutes = d.getMinutes();

		if (hour < 10) {
			hour = "0" + hour;
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		return hour + ":" + minutes;
	}
}

if (getCookie) {
	document.querySelector(".overlay").style.display = "none";
	let app = new Message();
}

document.querySelector(".sendUsername").addEventListener("click", (e) => {
	let user = document.getElementById("login__username").value;
	setCookie("user", user, 10);
	e.preventDefault();
});

function setCookie(cname, cvalue, exdays) {
  	var d = new Date();
  	d.setTime(d.getTime() + (exdays*24*60*60*1000));
  	var expires = "expires="+ d.toUTCString();
  	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return false;
}

document.querySelector(".send").addEventListener("click", (e) => {
	let text = document.querySelector(".write-message").value;
	sendMessage(text);
	e.preventDefault();
});

function sendMessage(text) {
	let url = `http://localhost:3000/api/v1/messages`;
	let data = {
		"user": getCookie("user"),
		"text": text
	};
	console.log(JSON.stringify(data));

	fetch(url, {
		method: 'post',
		body: JSON.stringify(data),
		headers: {
		    'Content-Type': 'application/json'
		  }
	}).then(response => {
		return response.json();
	}).then(json => {
		document.querySelector(".write-message").value = "";
		reload();
	}).catch(err => {
		console.log("Message: " + err);
	});
}

setTimeout(() => { 
	reload(); 
}, 10000);

function reload() {
	let app = new Message();
}