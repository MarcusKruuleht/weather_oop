// LS object
const ls = new LS()
console.log(ls)
// init location data
const cityName = ls.getLocationData()
console.log(cityName)

// Weather object
const weather = new Weather(cityName)

// UI object
const ui = new UI()
console.log(ui)

// city changing
const form = document.querySelector('#change-city')
form.addEventListener('submit', changeCityWeather)

// change city weather
function changeCityWeather(e){
	const cityName = document.querySelector('#city-name').value
	console.log(cityName)
	weather.changeCity(cityName)
	ls.setLocationData(cityName)
	getCityWeather()
	document.querySelector('#city-name').value=''
	e.preventDefault()
}


// get city weather and display it
function getCityWeather(){
	weather.getWeather()
	.then(data => {
		console.log(data)
		ui.drawWeather(data)
	})	
	.catch(error => console.log(error))
}

getCityWeather()