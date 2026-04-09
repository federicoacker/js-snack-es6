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
            name: `${names[randomNameIndex]} Mk.${i+1}`, 
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

    const lightestArray = [];
    
    for(let i = 0; i < bikeArray.length; i++){//Iteriamo tutte le bici
        const currentBike = bikeArray[i]; // Selezioniamo la bici corrente
        const currentBikeWeight = parseInt(currentBike.weight); // Selezioniamo il suo peso, dovrebbe parsarmi solo il peso, togliendo il kg alla fine
        if(currentBikeWeight < parseInt(lightest.weight)){ // Se il suo peso è inferiore a quello della bici lightest
            lightest = bikeArray[i]; // Allora aggiorniamo la variabile lightest dandogli il riferimento alla nuova bici
        }
    }
    // Vediamo ora se ci sono più bici che hanno tutte lo stesso peso di lightest

    for(let i = 0; i < bikeArray.length; i++){ // Iteriamo l'array
        const currentBike = bikeArray[i]; // Selezioniamo la bici corrente
        const currentBikeWeight = parseInt(currentBike.weight); // Selezioniamo il suo peso, dovrebbe parsarmi solo il peso, togliendo il kg alla fine
        if(currentBikeWeight === parseInt(lightest.weight)){ // Se il suo peso è inferiore a quello della bici lightest
            lightestArray.push(currentBike);
        }
    }

    const returnString = createBikeString(lightestArray); // Andiamo a comporre la stringa che conterrà tutte le bici che hanno lo stesso peso di lightest

    return returnString; //Restituisci la stringa
}

// FUNZIONE che crea una stringa formattata per il display del risultato in console
function createBikeString(lightestBikeArray){
    if(!Array.isArray(lightestBikeArray)){ // Innanzitutto controlla di ricevere un'array e se non lo è, ti da codice d'errore
        return -1;
    }

    let tempString = ""; // Inizializziamo una tempString vuota
    
    if(lightestBikeArray.length === 1){
        if(!lightestBikeArray[0].name && !lightestBikeArray[0].weight){// Se non ha la property name o weight, ritorna errore
            return -1;
        }

        // Altrimenti componi la stringa per 1 bicicletta, quella che è nell'array
        tempString = `La bici più leggera è la bellissima:

        ${lightestBikeArray[0].name} 
        - pesa solo:
        ${lightestBikeArray[0].weight}
        `;
    }
    else{
        
        // Comincia a comporre la stringa per più bici
        tempString = `Le bici più leggere sono le bellissime:

        `;
        for(let i = 0; i < lightestBikeArray.length; i++){
            if(!lightestBikeArray[i].name && !lightestBikeArray[i].weight){ // Fai sempre il controllo ad ogni entry dell'array, che abbia le properties name e weight
                return -1;
            }

            tempString+=`${lightestBikeArray[i].name}`; //Aggiungi alla stringa il nome della bici
            if(i<lightestBikeArray.length - 1){ // Se non siamo alla fine dell'array, aggiungi anche le virgole + spazio alla stringa, come separatori dei nomi delle bici
                tempString+=`, `;
            }
        }
        // Infine fuori dal loop, aggiungi anche quanto pesano, tanto hanno tutte lo stesso peso
        tempString += `
        - pesano solo, tutte:
        ${lightestBikeArray[0].weight}
        `; 
    }

    return tempString; // Restituiscimi la stringa formattata bene
}

const bikeArray = createObjectArray(20); // Creiamo il nostro array di bici
const lightest = findLightest(bikeArray); // Creiamo la stringa risultato
if(bikeArray === -1 || lightest === -1){
    console.error(`
        Errore negli elementi che sono stati passati alle funzioni: 
        - createObjectArray(arraySize) 
        - findLightest(bikeArray)
        - createBikeString(lightestBikeArray)
        Controlla il codice`
    );
}
else{ // Altrimenti stampa il risultato
    console.log(lightest);
}

