class CreatePoll {
	constructor() {
		let that = this;
		this.question = document.querySelector(".question").value;
		this.answer1 = document.querySelector(".answer1").value;
		this.answer2 = document.querySelector(".answer2").value;

		this.primus = Primus.connect('/createpoll', {
			reconnect: {
                max: Infinity // Number: The max delay before we try to reconnect.
                , min: 500 // Number: The minimum delay before we try reconnect.
                , retries: 10 // Number: How many times we should try to reconnect.
            }
        });

		that.primus.write({
			"question": this.question,
			"answer1": this.answer1,
			"answer2": this.answer2
		});
	}
}

document.querySelector(".btn").addEventListener('click', (e) => {
	let app = new CreatePoll();
});