var map = L.map("map").setView([48.525047047668544, 35.0340521325895], 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
L.marker([48.491890250630185, 35.06565567301477]).addTo(map);
L.marker([48.510062833847805, 35.0800205839499]).addTo(map);
L.marker([48.5234618708986, 35.03560573977133]).addTo(map);
L.marker([48.53047464928973, 35.01774574347294]).addTo(map);
L.marker([48.51718990610305, 35.05413531463655]).addTo(map);
