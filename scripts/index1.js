const names = [
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

function createObjectArray(arraySize){
    if(arraySize <= 0){
        return -1;
    }

    const objectArray = [];
    for(let i = 0; i<arraySize; i++){
        const randomNameIndex = Math.floor(Math.random() * names.length); //Visto che sto usando Math.floor, questo mi andrà da 0 a 8
        const randomWeight = (Math.floor(Math.random() * (20 - 5)) + 1) + 5; // Peso random da 6 a 20 (che saranno kg);
        const tempBike = 
        {
            name: names[randomNameIndex],
            weight: `${randomWeight}kg`
        };
        objectArray.push(tempBike);
    }

    return objectArray;
}

function findLightest(bikeArray){
    let lightest = bikeArray[0]; //Inizializziamo la bici più leggera come la prima
    for(let i = 0; i < bikeArray.length; i++){//Iteriamo tutte le bici
        const currentBike = bikeArray[i];
        const currentBikeWeight = parseInt(currentBike.weight); // Dovrebbe parsarmi solo il peso, togliendo il kg alla fine
        if(currentBikeWeight < parseInt(lightest.weight)){
            lightest = bikeArray[i];
        }
    }
    return lightest;
}

const bikeArray = createObjectArray(20);
console.log(bikeArray);
const lightest = findLightest(bikeArray);
console.log(lightest);