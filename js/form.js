const ownerName = document.getElementById("name");
const petName = document.getElementById("pet-name");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const formTag = document.querySelector("form");
const petData = [];

class PetData {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  ownerComparison(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

const updateList = function () {
  const listRow = document.getElementById("list-row");
  listRow.innerHTML = "";

  const newDiv = document.createElement("div");
  newDiv.classList.add("col");
  petData.forEach((element) => {
    const listItem = document.createElement("ul");
    listItem.classList.add("list-unstyled", "fs-5");
    listItem.innerHTML = ` 
  <li>
    Owner Name: ${element.ownerName},  
    </li>
    <li>Species: ${element.species},</li> 
    <li>Pet name: ${element.petName},</li> 
    <li>Breed: ${element.breed}.</li> 
   `;
    newDiv.appendChild(listItem);
  });

  listRow.appendChild(newDiv);
};

formTag.addEventListener("submit", function (e) {
  e.preventDefault();

  const petValues = new PetData(petName.value, ownerName.value, species.value, breed.value);
  petData.push(petValues);

  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";

  if (petData.length > 1) {
    const lastPet = petData[petData.length - 1];
    const secondLastPet = petData[petData.length - 2];

    const sameOwner = lastPet.ownerComparison(secondLastPet);
    console.log(`Hanno lo stesso proprietario? ${sameOwner}`);
  }

  updateList();
});
