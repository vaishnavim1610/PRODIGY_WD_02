const url = 'https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe%2FBerlin';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4c8f941e4amshd0b2a4023f11211p16dea0jsna8c639c2a074',
		'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
console.log("hii");
