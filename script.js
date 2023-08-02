let petsArray = [
    {name : 'Pinky', age : 4, speices : 'poodle'},
    {name : 'Viper', age : 1.9, spieces : 'wireworm'},
    {name : 'Cocos', age : 24, spieces : 'tapeworm'},
    {name : 'Bear', age : 5, spieces : 'bear'},
    {name : 'X Æ A-12', age : 0, spieces : 'fennec'},
    {name : 'Ribon', age : 29, spieces : 'owl'},
    {name : 'Louis', age : 15, spieces : 'koala'},
    {name : 'Michael', age : 120, spieces : 'djungarianHamster'},
    {name : 'Paradox', age : 2, spieces : 'frog'},
    {name : 'Zeus', age : 10, spieces : 'frog'},
]
// 

function addingPets () {
  // get details of new pet
    let name = prompt(" What's your pet's name? ")
    let species = prompt("What spieces does it belong to?")
    let age = prompt('How old is your pet?')

    // check that the input is valid
    if (name.match(/[a-zA-Z0-9]+/) && age.match(/^(0?[1-9]|[1-9][0-9])$/) && species.match(/^[a-zA-Z]+$/)){
    // create a pet object with the details.
    let pet = {
        name: name,
        age: age,
        species: species
    }
    
    // add pet object to pets array
    petsArray.push(pet)
} else {
  alert('The pet details are not valid.')
}
}

function showingPets (){
  for(let pet of petsArray){
    alert (pet.name)
  }
}

function removingPets() { 
    // output the names of each pet
    let index = 0
    for(let pet of petsArray) {
      alert(index + ': ' + pet.name)
      index = index + 1
    }

    // get the index of the oet to remove
    let deletingPet = prompt('Which pet do you want to delete?') 

    // remove the pet at the index
    pets.splice(deletingPet, 1)
}

function searchingPets() {
    let searchingName = prompt('What is the name of pet do you want to find?')

    // create a valiable to store whether we found it or not (haven't yet)
    let searchingResult = false

    // check each pet's name to see if it's the pet we're looking for, update the result if it is
    for (let pet of petsArray) {
      if (pet.name == searchingName) {
        searchingResult = true 
      }
    }
  
    // output whether the search found the pet or not
    if (searchingResult == true){
      alert(searchingName + ' was found! ')
    } else{
      alert(searchingName + ' was not found...')
    }
}