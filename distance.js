const distances = { 
  "france": { km: 1820, hours: 20 },
  "spain": { km: 1030, hours: 11 },
  "egypt": { km: 3400, hours: 35 },
  "usa": { km: 6500, hours: 70 },
  "algeria": { km: 500, hours: 6 },
  "tunisia": { km: 1500, hours: 16 },
  "saudi arabia": { km: 4700, hours: 50 },
  "uk": { km: 2600, hours: 28 },
  "iraq": { km: 4300, hours: 45 },
  "syria": { km: 4700, hours: 50 },
  "lebanon": { km: 4400, hours: 47 },
  "china": { km: 9600, hours: 100 },
  "japan": { km: 11500, hours: 120 }
};

function calculateDistance() {
  const input = document.getElementById("countryInput").value.trim().toLowerCase();
  const resultDiv = document.getElementById("distanceResult");

  if (input === "morocco") {
    resultDiv.innerHTML = "🥳 Wow! You are in my country! Hello from Meknes!";
  } else if (distances[input]) {
    const { km, hours } = distances[input];
    resultDiv.innerHTML = `The distance between Me and YOU "${input.toUpperCase()}" is about <b>${km} km</b> — roughly <b>${hours} hours</b> by car. 🚗`;
  } else {
    resultDiv.innerHTML = "❌ Sorry, this country isn't in the list yet!";
  }
}
const userDate = new Date(y, m - 1, d);
