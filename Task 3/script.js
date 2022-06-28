/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

'use strict'

const state = {};
const ENDPOINT = 'https://api.github.com/users';

function renderUserCards(users) {
    
  const cardsContainer = document.getElementById('output');
    cardsContainer.innerHTML = "";
    
    users.forEach((user) => {
      
    const userLogin = document.createElement("h2");
    userLogin.innerText = `${user.login}€`;
  
    const userAvatarUrl = document.createElement("p");
    userAvatarUrl.innerText = `${user.avatar_url}€`;
  
    const userCard = document.createElement("div");
    userCard.setAttribute("class", "user-card");
    userCard.append(
    userLogin,
    userAvatarUrl,
      );
    cardsContainer.append(userCard);
    });
    
  };
  

  const fetchData = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        state.users = await response.json();
        renderUserCards(state.users)
      }
    } catch (error) {
      console.error(error);
    }
  };

  // fetchData();

document.getElementById('btn').addEventListener('click', fetchData)
document.querySelector('output').addEventListener('btn'); 