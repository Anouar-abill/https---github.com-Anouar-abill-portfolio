let map = L.map("map").setView([51.2554, 4.4339], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 10,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker = L.marker([51.2554, 4.4339]).addTo(map);
marker.bindPopup("<b>Merksem</b><br>Antwerpen.").openPopup();

let circle = L.circle([51.2554, 4.4339], {
  className: "circle-style",
  radius: 300,
}).addTo(map);
