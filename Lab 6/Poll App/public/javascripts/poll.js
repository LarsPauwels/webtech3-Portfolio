class Poll {
	constructor() {
        // set up some basic selectors we'll use often
        let that = this;

        //primus web sockets
        this.primus = Primus.connect('/createpoll', {
            reconnect: {
                max: Infinity // Number: The max delay before we try to reconnect.
                , min: 500 // Number: The minimum delay before we try reconnect.
                , retries: 10 // Number: How many times we should try to reconnect.
            }
        });

        this.primus.on("data", (data)=>{
            that.createpoll(data.question, data.answer1, data.answer2);
        });
    }

    createpoll(question, answer1, answer2) {
        document.querySelector(".poll-question").innerHTML = question;
        document.querySelector(".answer1").innerHTML = answer1;
        document.querySelector(".answer2").innerHTML = answer2;

        this.changeVisual();
    }

    changeVisual() {
        let pollButtons = document.querySelectorAll(".poll-panel-btn");
        let pollPanel = document.querySelector(".poll-panel");

        pollButtons.forEach(button => {
            button.onclick = () => {
                this.vote(button.dataset.vote);
                pollPanel.classList.add("poll-voted");
                button.classList.add("--user-choice");
                pollButtons.forEach(b => {
                    let percent = this.percent(b);
                    b.style.width = percent;
                    b.dataset.result = percent;
                });
            }
        });
    }

    vote(vote) {
        let i = 0;
        if (vote == 0) {
            let answer = document.querySelector(".answer1");
            i = answer.getAttribute('data-result');
            i++;
            answer.setAttribute('data-result', i);
        } else {
            let answer = document.querySelector(".answer2");
            i = answer.getAttribute('data-result');
            i++;
            answer.setAttribute('data-result', i);
        }
    }

    percent(button) {
        let votes = 0;
        let votes1 = document.querySelector(".answer1").getAttribute('data-result');
        let votes2 = document.querySelector(".answer2").getAttribute('data-result');

        if (button.dataset.vote == 0) {
            return votes1 / (votes1 + votes2) * 100;
        } else {
            return votes2 / (votes1 + votes2) * 100;
        }
    }
}

let app = new Poll();