const request = require('request');
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


//http://api.weatherstack.com/current?access_key=114aca618898ea5047414e720e1c2ac6&query=37.8267,-122.4233&units=m


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=114aca618898ea5047414e720e1c2ac6&query=' + latitude + ',' + longitude + '&units=m'
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            console.log(body.current)
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degree celsius out. It feels like ' + body.current.feelslike + ' degrees out. There is a ' + body.current.precip + '% chance of rain. The humidity is '+ body.current.humidity+'%.');
        }
    })
}

module.exports = forecast
