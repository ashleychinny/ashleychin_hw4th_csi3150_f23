import usedCars from "./usedCars.js";

const minYearInput = document.getElementById("minYear");
const maxYearInput = document.getElementById("maxYear");
const carListings = document.getElementById("carListings");

// Function to filter and display cars based on user input
function filterCars() {
  const minYear = parseInt(minYearInput.value) || 2005;
  const maxYear = parseInt(maxYearInput.value) || 2012;

  // Apply other filters (make, mileage, price, color) here

  const filteredCars = usedCars.filter((car) => {
    return car.year >= minYear && car.year <= maxYear;
    // Apply other filters here
  });

  if (filteredCars.length === 0) {
    carListings.innerHTML =
      "<p>No cars match your criteria. Please try again.</p>";
  } else {
    displayCarListings(filteredCars);
  }
}
/*function createCarCards() {
    const carContainer = document.getElementById("cargrid");

    carListings.forEach (car); {
        car.price = car.price.toLocaleString();
        car.mileage = car.price.toLocaleString();
        const card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = 
            <img src="${car.image}" alt="${car.make} $car.model} Image"> 
            <hr>
            <h2>${car.make} ${car.model}</h2>
            </hr>
            <p>Price: $${car.price}</p>
            <hr>
            <p>Year: ${car.year}</p>
            <p>Color: ${car.color}</p>
            <p>Color: ${car.color}</p>
            <p>Color: ${car.color}</p>
            <button type="button" class="btn btn-outline-primary">More Details</button>
        ;
        carContainer.appendChild(card);

    });
}
create CarCards();*/

// Function to display car listings
function displayCarListings(cars) {
  carListings.innerHTML = "";
  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className = "car-card";
    carCard.innerHTML = `
            <h3>${car.make} ${car.model}</h3>
            <p>Year: ${car.year}</p>
            <p>Price: $${car.price.toFixed(2)}</p>
            <p>Color: ${car.color}</p>
            <p>Mileage: ${car.mileage} miles</p>
            <p>Gas Mileage: ${car.gasMileage}</p>
            <!-- Add more car details here -->
        `;
    carListings.appendChild(carCard);
  });
}

// Event listeners for input changes
minYearInput.addEventListener("input", filterCars);
maxYearInput.addEventListener("input", filterCars);
// Add event listeners for other filter inputs here

// Initial load
displayCarListings(usedCars);
