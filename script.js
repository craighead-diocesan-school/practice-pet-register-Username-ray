let petsArray = [
    {name : 'Pinky', age : 4, speices : 'poodle'},
    {name : 'Viper', age : 1.9, spieces : 'wireworm'},
    {name : 'Cocos', age : 24, spieces : 'tapeworm'},
    {name : 'Bear', age : 5, spieces : 'bear'},
    {name : 'X Æ A-12', age : 0, spieces : 'fennec'},
    {name : 'Ribon', age : 29, spieces : 'owl'},
    {name : 'Louis', age : 15, spieces : 'koala'},
    {name : 'Michael', age : 120, spieces : 'djungarianHamster'},
    {name : 'Paradox', age : 2, spieces : elephant},
    {name : 'Zeus', age : 10, spieces : frog},
]

function addingPets () {
    let name = prompt(" What's your pet's name? ")
    let species = prompt("What spieces does it belong to?")
    let age = prompt('How old is your pet?')
    let pet = {
        name: name,
        age: age,
        species: species,
    }
    PermissionStatus.push(pet)
}

function showingPets (){
    alert (petsArray)
}

function removingPets() { 
    //Keep asking which subjects they want to delete until told to stop.
    let deletingPet = prompt('Which pet do you want to delete?')
    while(deletingPet != 'stop'){
      pet.splice(index, 1)
    }
}

function searchingPets() {
    let searchingName = prompt('What is the name of pet do you want to search?')
    let searchingResult = false
    for (let name of petsArray) {
      if (name == searchingName) {
        searchingResult = true 
      }
    }
  
    if (searchingResult == true){
      alert(searchingName + ' was found! ')
    } else{
      alert(searchingName + ' was not found...')
    }
}

function searchingSpecies() {
    let searchingSpecies = prompt('What is the species of pet do you want to search?')
    let searchingResult = false
    for (let name of petsArray) {
      if (name == searchingSpecies) {
        searchingResult = true 
      }
    }
  
    if (searchingResult == true){
      alert(searchingSpecies + ' was found! ')
    } else{
      alert(searchingSpecies + ' was not found...')
    }
}