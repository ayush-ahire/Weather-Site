const desc = document.getElementById('description');
const wind = document.getElementById('wind');
const temperature = document.getElementById('temperature');

function weatherNow() {
    const city = document.getElementById("city").value;
  fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
      // Work with the JSON data here
    //   console.log(data.description);
     desc.innerHTML=data.description
     wind.innerHTML=data.wind
     temperature.innerHTML=data.temperature
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch operation
      console.error("Fetch error:", error);
    });
}
