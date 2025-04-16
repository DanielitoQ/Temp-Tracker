const claveApi = "94b73896f6dd49e6bd7210320251004";
const idioma = "es";
const inputCiudad = document.getElementById("input-ciudad");

async function obtenerClima() {
  const ciudad = inputCiudad.value;

  if (!ciudad) {
    alert("Por favor, ingresa una ciudad.");
    return;
  }

  const apiClimaActual = `https://api.weatherapi.com/v1/current.json?
q=${ciudad}&lang=${idioma}&key=${claveApi}`;

  const response = await fetch(apiClimaActual);
  let data = await response.json();

  await mostrarClima(data);
}

async function mostrarClima(data) {
  document.querySelector(".clima-icono").src = data.current.condition.icon;
  document.querySelector(".clima-texto").innerHTML =
    data.current.condition.text;
  document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
  document.querySelector(".ciudad").innerHTML = data.location.name;
  document.querySelector(".humedad").innerHTML = data.current.humidity + "%";
  document.querySelector(".viento").innerHTML = data.current.wind_kph + " km/h";
}
