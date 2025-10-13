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
  "japan": { km: 11500, hours: 120 },
  "germany": { km: 2600, hours: 28 },
  "italy": { km: 2800, hours: 30 },
  "portugal": { km: 1500, hours: 16 },
  "belgium": { km: 2700, hours: 29 },
  "netherlands": { km: 2700, hours: 29 },
  "switzerland": { km: 2800, hours: 30 },
  "austria": { km: 2900, hours: 32 },
  "sweden": { km: 4000, hours: 42 },
  "norway": { km: 4100, hours: 43 },
  "denmark": { km: 3000, hours: 33 },
  "finland": { km: 4200, hours: 44 },
  "india": { km: 6700, hours: 72 },
  "pakistan": { km: 6300, hours: 68 },
  "iran": { km: 4700, hours: 50 },
  "turkey": { km: 3600, hours: 38 },
  "south africa": { km: 8000, hours: 85 },
  "nigeria": { km: 4200, hours: 45 },
  "kenya": { km: 5600, hours: 60 },
  "argentina": { km: 9500, hours: 100 },
  "chile": { km: 9700, hours: 102 },
  "australia": { km: 15500, hours: 160 },
  "new zealand": { km: 16500, hours: 170 },
  "russia": { km: 5200, hours: 55 },
  "ukraine": { km: 4000, hours: 42 },
  "poland": { km: 3000, hours: 33 },
  "greece": { km: 3500, hours: 37 },
  "czech republic": { km: 2900, hours: 31 },
  "hungary": { km: 3000, hours: 32 },
  "brazil": { km: 9500, hours: 100 },
  "canada": { km: 6000, hours: 65 }
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
