const names = [ //Array di nomi casuali
    "Pedala e Piangi", 
    "Ciclofallo", 
    "Bici da Brutta Figura", 
    "Sella Spezzaossa", 
    "GraffiaGomiti", 
    "Catena del Peccato", 
    "Forcella del Disastro",
    "Bici del Mai Più",
    "Pedalata Mortale",
    "Due Ruote di Vergogna"
]

//FUNZIONE che crea array di oggetti (in questo caso, array di bici)
function createObjectArray(arraySize){ //Accetta una arraySize a scelta dell'utente
    if(arraySize <= 0){// Se l'arraySize è minore di 0, restituisce codice d'errore -1
        return -1;
    }

    const objectArray = [];// array di oggetti che restituiremo
    for(let i = 0; i<arraySize; i++){
        const randomNameIndex = Math.floor(Math.random() * names.length); //Visto che sto usando Math.floor, questo mi andrà da 0 a 8
        const randomWeight = (Math.floor(Math.random() * (20 - 5)) + 1) + 5; // Peso random da 6 a 20 (che saranno kg);
        const tempBike =  // Creiamo la bicicletta dandogli nome e peso
        {
            name: names[randomNameIndex], 
            weight: `${randomWeight}kg`
        };
        objectArray.push(tempBike); // Pushiamola nell'array
    }

    return objectArray; // Restituiamo l'array di oggetti
}

//FUNZIONE che trova la bici più leggera da un array di bici
function findLightest(bikeArray){ 
    if(!Array.isArray(bikeArray)){//Ritorniamo codice d'errore se non ci passi un array
        return -1;
    }
    let lightest = bikeArray[0]; //Inizializziamo la bici più leggera come la prima

    for(let i = 0; i < bikeArray.length; i++){//Iteriamo tutte le bici
        const currentBike = bikeArray[i]; // Selezioniamo la bici corrente
        const currentBikeWeight = parseInt(currentBike.weight); // Selezioniamo il suo peso, dovrebbe parsarmi solo il peso, togliendo il kg alla fine
        if(currentBikeWeight < parseInt(lightest.weight)){ // Se il suo peso è inferiore a quello della bici lightest
            lightest = bikeArray[i]; // Allora aggiorniamo la variabile lightest dandogli il riferimento alla nuova bici
        }
    }

    return lightest; // Restituiamo la lightest, che è il riferimento alla bici con weight più basso
}

const bikeArray = createObjectArray(20); // Creiamo il nostro array di bici
const lightest = findLightest(bikeArray); // Creiamo un riferimento alla bici più leggera nell'array
if(bikeArray === -1 || lightest === -1){
    console.log(`
        Errore negli elementi che sono stati passati alle funzioni: 
        - createObjectArray(arraySize) 
        - findLightest(bikeArray)
        Controlla il codice`
    );
}
else{
    console.log(`La bici più leggera è la bellissima: 
        ${lightest.name} 
        - pesa solo:
        ${lightest.weight}`
    ); //Stampiamo il risultato
}
