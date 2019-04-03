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
		for (var i = 0; i < json.message.length; i++) {
			let messageText = json.message[i].text;
			let user = json.message[i].user;
			let timestamp = json.message[i].timestamp;

			messagesChat.innerHTML += 
			`<div class="message">
            	<div class="photo" style="background-image: url(https://www.startupdelta.org/wp-content/uploads/2018/04/No-profile-LinkedIn.jpg);">
              		<div class="online"></div>
            	</div>
            	<p class="text">${user}: ${messageText}</p>
          	</div>
          	<p class="time">${timestamp}</p>`;
		}
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

let app = new Message();