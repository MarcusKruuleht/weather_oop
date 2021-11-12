// Weather object
const weather = new Weather('Tallinn')

// UI object
const ui = new UI()
console.log(ui)

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