/*let weather = {
	'location': {
		'x': 52.788,
		'y': 10.000,
	},
	'degrees': 12,
	'icons': ['sun.svg', 'clouds.svg']
};

console.log(weather.location);*/

class Weather {
	constructor(API_KEY) {
		this.API_KEY = API_KEY;
		this.initialize();
	}

	initialize() {
		this.getMyLocation();
	}

	getMyLocation() {
		console.log("Getting location!");
		navigator.geolocation.getCurrentPosition(position => {
			let lat = position.coords.latitude;
			let lng = position.coords.longitude;
			this.getWeather(lat, lng);
			console.log(lat + " / " + lng);
		}, err => {
			console.log("Location: " + err);
		});
	}

	getWeather(lat, lng) {
		let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat}, ${lng}?units=si`;
		fetch(url, {
			method: 'get'
		}).then(response => {
			return response.json();
		}).then(json => {
			this.addWeather(json);
			this.getType(json);
		}).catch(err => {
			console.log("Weather: " + err);
		});
	}

	getType(json) {
		let precipType = json.currently.precipType;
		new Background('c62c26e7bd6cfb9382ef5bdd562efe1c9122f59c9faaef09edf67821cdda06c9', precipType);
	}

	addWeather(json) {
		let temp = Math.round(json.currently.temperature) + "<span>°</span>";
		let city = json.timezone;
		let summary = json.currently.summary;

		let DOMElements = ["h2", "h4", "h6"];
		let texts = [temp, city, summary];

		this.placeValues(DOMElements, texts);

		this.addDays(json);
	}

	addDays(json) {
		let date_DOM = document.querySelector(".date");
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		let d = new Date();
		let currentDay = d.getDay();
		let date = days[currentDay];
		date_DOM.innerHTML = date;

		let nextDays_DOM = document.querySelector("#owl-demo");
		for (var i = 0; i < 7; i++) {
			let dailyTemp = this.getDaily(json, i);
			currentDay++;
			date = days[currentDay];
			nextDays_DOM.innerHTML += `<div class="item agile-item"><h6>${date}</h6>${dailyTemp}</div>`;
		}

		this.owlCarousel();
	}

	getDaily(json, count) {
		let dailyMin = json.daily.data[count].temperatureMin;
		let dailyMax = json.daily.data[count].temperatureMax;
		let dailyAverage = Math.round((dailyMin + dailyMax) /2);
		return `<span>${dailyAverage}°</span>`;
	}

	owlCarousel() {
		$(document).ready(function() { 
			$("#owl-demo").owlCarousel({ 
			  autoPlay: 3000,
			  items : 3,
			  itemsDesktop : [768,3],
			  itemsDesktopSmall : [414,4]
			});
		});
	}

	placeValues(DOMElements, texts) {
		for (var i = 0; i < texts.length; i++) {
			let DOMElement = document.querySelector(`.agileinfo-text ${DOMElements[i]}`);
			DOMElement.innerHTML = texts[i];
		}
	}
}

class Background {
	constructor(API_KEY, precipType) {
		this.API_KEY = API_KEY;
		this.precipType = precipType;
		
		this.initialize();
	}

	initialize() {
		this.getBackground();
	}

	getBackground() {
		let url = `https://cors-anywhere.herokuapp.com/https://api.unsplash.com/search/photos?client_id=${this.API_KEY}&page=1&query=${this.precipType}-weather`;
		fetch(url, {
			method: 'get'
		}).then(response => {
			return response.json();
		}).then(json => {
			this.placeBackground(json);
		}).catch(err => {
			console.log("Weather: " + err);
		});
	}

	placeBackground(json) {
		let imageAmount = this.imageAmount(json) + 1;
		let random = Math.floor(Math.random() * imageAmount);

		let footer = document.querySelector(".copy-rights a p");
		footer.innerHTML = "Made by: " + json.results[random].user["username"];

		let link = document.querySelector(".copy-rights a");
		link.setAttribute("href", json.results[random].user["portfolio_url"]);

		let imageURL = json.results[random].urls["full"];
		let body = document.querySelector("body");
		body.setAttribute("style", `background-image: url(${imageURL});`);
	}

	imageAmount(json) {
		return json.results.length;
	}
}

let app = new Weather('c0c83edd4a137df284ba6175ae9976af');