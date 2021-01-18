async function getIp() {
  let ipadress =
    "https://geo.ipify.org/api/v1?apiKey=at_UuQ44JBBCXI3pLjDxXbw0itNbKv0b";
  try {
    let response = await fetch(ipadress);
    return response.json();
  } catch (err) {
    console.log("error");
  }
}

const result = getIp();
result.then((res) => {
  let mymap = L.map("mapid").setView([res.location.lat, res.location.lng], 13);

  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(mymap);
  document.getElementById("ipAdd").textContent = res.ip;
  document.getElementById("location").textContent = res.location.region;
  document.getElementById("timezone").textContent = res.location.timezone;
  document.getElementById("isp").textContent = res.isp;
});

const input = document.querySelector(".input11");
input.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = e.target.value;
});
