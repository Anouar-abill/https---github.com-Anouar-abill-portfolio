



let map = L.map("map").setView([51.2399, 4.4212], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker = L.marker([51.2399, 4.4212]).addTo(map);
marker
  .bindPopup("<b>AP Hogeschool</b><br>Noorderlaan, Antwerpen.")
  .openPopup();

let circle = L.circle([51.2399, 4.4212], {
  className: "circle-style", // Voeg hier de CSS-klasse toe
  radius: 300,
}).addTo(map);
