const input = document.querySelector('.search')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const time = document.querySelector('.time')
const temp = document.querySelector('.temperature span')
const description = document.querySelector('.desc')
const visibility = document.querySelector('.visibility div')
const wind = document.querySelector('.wind div')
const humidity = document.querySelector('.humidity div')
const content = document.querySelector('.content')
const container = document.querySelector('.container')
const body = document.querySelector('body')
async function getWeather(input){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=ae4fecfca3f9056b2d90a9c7286c14c7`
    let data = await fetch(url) .then(res => res.json())
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        let temperature = Math.floor(data.main.temp - 273)
        temp.innerText = temperature
        if(temperature >= 25){
            body.classList.remove('cold')
            body.classList.add('hot')
        } 
        else {
            body.classList.remove('hot')
            body.classList.add('cold')
        }
        time.innerText = new Date().toLocaleString()
        description.innerText = data.weather[0].description.toUpperCase()
        visibility.innerText = data.visibility
        wind.innerText = data.wind.speed + 'm/s'
        humidity.innerText = data.main.humidity + '%'
    }else{
        // content.classList.add('hide')
        alert('Failed to load weather')
    }
}

input.addEventListener('keyup', e => {
    if(e.key == 'Enter'){
        getWeather(e.target.value)
        e.target.value = ''
    }
})

getWeather('Ha Noi')