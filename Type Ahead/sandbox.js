const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const search = document.querySelector(".search");

const cities = [];

async function cityDetails() {
  const resp = await fetch(endpoint);
  const data = await resp.json();
  cities.push(...data);
}

cityDetails();

function matchCity(wordToMatch, cities) {
  return cities.map((city) => {
    console.log("hello");
    console.log(city);
    return city;
  });
}

const place = matchCity("New", cities);
