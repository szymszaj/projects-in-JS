//adding things to objects

const user = {
    name: 'Justyna',
    age: 20,
    'fav-color': 'czerwony'
}
user.country = 'Polska'
//user.fav-color
user['fav-color'] = 'niebieski'
console.log(user);

//proba 1
const dogName = 'dante'
const dogAge = 4

const dog = {
    dogName,
    dogAge

}
console.log(dog);

//proba 2

const birdType = 'parrot'
const birdColor = 'black'
const birdAge = 2

const bird = {
    birdType,
    birdColor,
    birdAge
}
console.log(bird);

//proba 3

const catName = 'miss'
const catAge = 5

const cat = {
    catName,
    catAge
}
console.log(cat);