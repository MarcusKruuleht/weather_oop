class Weather{
	constructor(city){
		this.city = city
		this.key = 'd00152fe962c8822c05ca141c0c4c22c'
	}

	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responseData = await response.json()
		return responseData
	}

	changeCity(city){
		this.city = city
	}
}