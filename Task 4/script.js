/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

'use strict'

const state = {};

const ENDPOINT = 'cars.json';

function renderCarsCards(cars) {
  
    const cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = "";
  
    cars.forEach((car) => {
      
      const carBrand = document.createElement("h2");
      carBrand.innerText = `${car.brand}€`;
  
      const carModels = document.createElement("p");
      carModels.innerText = `${car.models}€`;
  
      const carCard = document.createElement("div");
      carCard.setAttribute("class", "car-card");
      carCard.append(
        carBrand,
        carModels
      );
      cardsContainer.append(carCard);
    });
  }
  
  const fetchData = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        state.cars = await response.json();
        renderCarsCards(state.cars)
      }
    } catch (error) {
      console.error(error);
    }
  };
    
  fetchData();
