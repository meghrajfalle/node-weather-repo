
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



// Goal : Render content to paragraphs

// 1. Select the second message p from Javascript
// 2. Just before fetch, render loading message and empty p
// 3. If error, render error
// 4. If no error, render location and forecast
// 5. Test your work! Search for errors and valid locations



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    console.log(location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`)
        .then(
            (response => {
                response.json().then((data) => {
                    if (data.error) {
                        messageOne.textContent = data.error
                    } else {
                        messageOne.textContent = data.location
                        messageTwo.textContent = data.forecast
                    }
                })
            })
        )

})







//http://api.weatherstack.com/current?access_key=114aca618898ea5047414e720e1c2ac6&query=New%20York


//Goal: Fetch weather!
// 1. Setup a call to fetch weather for Boston
// 2. Get the parse JSON response
//      - If error property, print error
//      - If no error property, print location and forecast
// 3. Refresh the browser and test your work


// Goal: Use input value to get the weather
// 1. Migrate fetch call into submit callback
// 2. Use the search text as the address query string value
// 3. Submit the form with a valid and invalid value to test
