class UI {
	constructor(){
		this.description = document.querySelector('#description')
		this.temp = document.querySelector('#temp')
		this.location = document.querySelector('#location')
		this.windspeed = document.querySelector('#windspeed')
		this.winddirection = document.querySelector('#winddirection')
		this.pressure = document.querySelector('#pressure')
		this.humidity = document.querySelector('#humidity')


	}

	drawWeather( data ) {
	let celsius = Math.round(parseFloat(data.main.temp)-273.15);
	let description = data.weather[0].description;

	this.description.innerHTML = description;
	this.temp.innerHTML = celsius + '&deg;';
	this.location.innerHTML = data.name;
	this.windspeed.innerHTML = data.wind.speed + ' m/s';
	this.winddirection.innerHTML = data.wind.deg + '&deg Tuule suund';
	this.pressure.innerHTML = data.main.pressure + ' mmHg';
	this.humidity.innerHTML = data.main.humidity + ' %';

}
}