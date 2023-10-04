const petPromise = await fetch("https://learnwebcode.github.io/pet-adoption-data/pets.json")
const pets = await petPromise.json()

const template = document.querySelector("#animal-card")
const wrapper = document.createElement("div")


//wypisywanie  wieku 
function decideAgeText(age) {
    if (!age) {
        return "Less than a year old "
    }

    return age > 1 ? `${age} years old ` : "1 year old "
}

pets.forEach(pet => {

    //odpowiednie/zmiana nazwy
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = pet.name

    //zmiana zdjecia 
    const img = clone.querySelector("img")
    img.src = pet.photo
    img.alt = `A ${pet.species} named ${pet.name}`

    //wywolywanie wieku
    const age = new Date().getFullYear() - pet.birthYear
    const ageText = decideAgeText(age)
    clone.querySelector(".age").textContent = ageText

    clone.querySelector(".species").textContent = pet.species
    clone.querySelector(".description").textContent = pet.description
    clone.querySelector(".name").textContent = pet.name
    clone.querySelector(".primary-btn").href = `https://learnwebcode.github.io/pet-adoption-data/pets/${pet.id}/`

    wrapper.appendChild(clone)
})

document.querySelector(".animals").appendChild(wrapper)