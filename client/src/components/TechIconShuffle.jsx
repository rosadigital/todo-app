// TechIconShuffle.jsx

let techIcons = [
  "bootstrap.png",
  "c-sharp.png",
  "flutter.png",
  "github.png",
  "html.png",
  "java.png",
  "javascript.png",
  "python.png",
  "react.png",
  "spring-boot.png",
];
let iconDiv = document.getElementById("technology-icons");

function shuffleArray(array) {
  // Fisher-Yates algorithm // array shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[j], array[i]] = [array[i], array[j]];
  }
  return array;
}
console.log("original array: " + techIcons);
techIcons = shuffleArray(techIcons);
console.log("shuffled array: " + techIcons);

for (let i = 0; i < techIcons.length - 1; i++) {
  let img = document.createElement("img");
  img.src = "assets/icons/" + techIcons[i];
  iconDiv.appendChild(img);
}

export default shuffleArray;
