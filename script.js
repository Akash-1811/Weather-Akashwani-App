const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '27eeaf8889mshdeb9a7f96672e84p10b940jsnbeb721b2d366',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const get_weather=(city)=>{
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            //wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err));
}

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    get_weather(city.value)
})

get_weather('Lucknow')

const get_weather_London=(city)=>{
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

            cloud_pctl.innerHTML = response.cloud_pct
            templ.innerHTML = response.temp
            feels_likel.innerHTML = response.feels_like
            humidityl.innerHTML = response.humidity
            min_templ.innerHTML = response.min_temp
            max_templ.innerHTML = response.max_temp
            wind_speedl.innerHTML = response.wind_speed
            wind_degreesl.innerHTML = response.wind_degrees
            sunrisel.innerHTML = response.sunrise
            sunsetl.innerHTML = response.sunset

    })
    .catch(err => console.error(err));

}

get_weather_London('London')


const get_weather_NewYork=(city)=>{
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

            cloud_pctn.innerHTML = response.cloud_pct
            tempn.innerHTML = response.temp
            feels_liken.innerHTML = response.feels_like
            humidityn.innerHTML = response.humidity
            min_tempn.innerHTML = response.min_temp
            max_tempn.innerHTML = response.max_temp
            wind_speedn.innerHTML = response.wind_speed
            wind_degreesn.innerHTML = response.wind_degrees
            sunrisen.innerHTML = response.sunrise
            sunsetn.innerHTML = response.sunset

    })
    .catch(err => console.error(err));

}

get_weather_NewYork('New York')


const get_weather_capetown=(city)=>{
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=cape town', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

            cloud_pctc.innerHTML = response.cloud_pct
            tempc.innerHTML = response.temp
            feels_likec.innerHTML = response.feels_like
            humidityc.innerHTML = response.humidity
            min_tempc.innerHTML = response.min_temp
            max_tempc.innerHTML = response.max_temp
            wind_speedc.innerHTML = response.wind_speed
            wind_degreesc.innerHTML = response.wind_degrees
            sunrisec.innerHTML = response.sunrise
            sunsetc.innerHTML = response.sunset

    })
    .catch(err => console.error(err));

}

get_weather_capetown('Cape town')


const get_weather_sydney=(city)=>{
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=sydney', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

            cloud_pcts.innerHTML = response.cloud_pct
            temps.innerHTML = response.temp
            feels_likes.innerHTML = response.feels_like
            humiditys.innerHTML = response.humidity
            min_temps.innerHTML = response.min_temp
            max_temps.innerHTML = response.max_temp
            wind_speeds.innerHTML = response.wind_speed
            wind_degreess.innerHTML = response.wind_degrees
            sunrises.innerHTML = response.sunrise
            sunsets.innerHTML = response.sunset

    })
    .catch(err => console.error(err));

}

get_weather_sydney('Sydney')


// connect to mongodb in nodejs?
