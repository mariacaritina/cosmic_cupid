// const peopleData = [
//     { name: 'Emma Johnson', age: 27, image:'/matches/people/girl1.jpg' },
//     { name: 'Liam Johnson', age: 29, image:'/matches/people/guy1.jpg' },
//     { name: 'Olivia Smith', age: 25, image:'/matches/people/girl2.jpg' },
//     { name: 'Noah Miller', age: 28, image:'/matches/people/guy2.jpg' },
//     { name: 'Taylor Jackson', age: 34, image:'/matches/people/guy3.jpg' },
//     { name: 'Sophia Martinez', age: 25, image:'/matches/people/girl4.jpg' },
//     { name: 'Isaac Nealy', age: 25, image:'/matches/people/girl4.jpg' },
//     { name: 'Isabella Turner', age: 22, image:'/matches/people/girl6.jpg' },
//     { name: 'Breanna Greenwell', age: 27, image:'/matches/people/girl5.jpg' },
//     { name: 'Antoine Moreau', age: 35, image:'/matches/people/guy5.jpg' },
// ];

let peopleData = []


fetch("http://localhost:3000/users")
.then(response => {
    return response.json()
})
.then(json => {
    console.log(json)
    peopleData = json
    createFeed()
})

function loadChat() { 
    window.location.href="/chats"
}

  function createFeed() {

const peopleList = document.getElementById('people-list');

peopleData.forEach((person, index) => {
  const personElement = document.createElement('div');
  personElement.classList.add('person');
personElement.onclick = loadChat

  const imageElement = document.createElement('img');
  imageElement.src = person.profilepic;
  imageElement.alt = `Person ${index + 1}`;
  imageElement.classList.add('person-image');

  imageElement.width = 150; 
  imageElement.height = 150; 

  const infoElement = document.createElement('div');
  infoElement.classList.add('person-info');

  const nameElement = document.createElement('h3');
  nameElement.classList.add('person-name');
  nameElement.textContent = `${person.firstname} ${person.lastname}`;

  const ageElement = document.createElement('p');
  ageElement.classList.add('person-age');
  ageElement.textContent = `Birthday: ${person.birthdate}`;

  const risingSignElement = document.createElement('p')
  risingSignElement.textContent = `Rising Sign: ${person.risingsign}`

  const sunSignElement = document.createElement('p')
  sunSignElement.textContent = `Sun Sign: ${person.sunsign}`

  const moonSignElement = document.createElement('p')
  moonSignElement.textContent = `Moon Sign: ${person.moonsign}`

  const relationshipElement = document.createElement('p')
  relationshipElement.textContent = `Looking for a ${person.choice} relationship`

  infoElement.appendChild(nameElement);
  infoElement.appendChild(ageElement);

  personElement.appendChild(imageElement);
  personElement.appendChild(infoElement);
  infoElement.appendChild(sunSignElement)
  infoElement.appendChild(risingSignElement)
  infoElement.appendChild(moonSignElement)
  infoElement.appendChild(relationshipElement)

  peopleList.appendChild(personElement);
});
}







