console.log("yo")


const jumpStopRecords = []
const chattenRecords = []
const polarRecords = []


const createCountryArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}


const BruceA = createCountryArtist("Bruce Atikins", "Country", 23)
const AvilleD = createCountryArtist("Avilee Dallas", "Country", 19)

chattenRecords.push(BruceA, AvilleD)
console.log(chattenRecords)



const createPopArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const JensenB = createPopArtist("Jensen Brown", "Pop", 20)
const AustinK = createPopArtist("Austin Kinkaid", "Pop", 18)
polarRecords.push(JensenB, AustinK)


createRapArtist = () => {

}

createFunkArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }

}

const dreF = createFunkArtist("Dre Funkz", "Funk", 25)
jumpStopRecords.push(dreF)

createRapArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }

}

const dustaG = createRapArtist("Dusta Grimes", "Rap", 21)
const LoyonceB = createRapArtist("Loyonce Branis", "Rap", 14)
jumpStopRecords.push(dustaG, LoyonceB)

createBlueGrassArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }

}

const bartD = createBlueGrassArtist("Bart Danielson", "BlueGrass", 23)
chattenRecords.push(bartD)

console.log(jumpStopRecords, chattenRecords, polarRecords)



