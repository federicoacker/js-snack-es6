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

function findLightest(arrayDiBiciclette){
    let min = parseInt(arrayDiBiciclette[0].weight); //Dovrebbe parsarmi solo la part numerica di weight, escludendo kg
    for(let i = 0; i < arrayDiBiciclette.length; i++){
        const currentWeight = parseInt(arrayDiBiciclette[i].weight);
        if(currentWeight < min){
            min = currentWeight;
        }
    }
    return min;
}

const bikeArray = createObjectArray(20);
console.log(bikeArray);