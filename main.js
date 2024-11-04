
// console.log("1");
// console.log(setTimeout(() => { console.log("2") }, 0));
// console.log("3");

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err)=> console.error("Error:" + err))


// https://api.openweathermap.org/data/2.5/weather?units=metric&q=  &appid={API key}
apiKey = "f112ffd524d1f7938ad75467818c715f"


const searchBox = document.querySelector("input")
const searchBtn = document.querySelector("button")


async function clickWeather(city) {
    // console.log(city)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=` + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data)

    document.querySelector(".country").innerHTML += data.sys.country;
    document.querySelector(".city").innerHTML += data.name;
    document.querySelector(".temp").innerHTML +=  Math.floor( data.main.temp ) + "<sup>o</sup>C";
}

// sub script
// sup script

searchBtn.addEventListener("click", () => {
    // console.log("search")
    clickWeather(searchBox.value)
})





