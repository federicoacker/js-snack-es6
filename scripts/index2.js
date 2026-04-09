const MAX_POINTS = 30; // Il massimo di punti che voglio ogni squadra possa avere
const MAX_FOULS = 10; // Il massimo di falli subiti che voglio ogni squadra possa avere
//Array con tutte le squadre
const teamArray = [
    {
        name:"Atalanta",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Bologna",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Cagliari",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Como",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Cremonese",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Fiorentina",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Genoa",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Hellas Verona",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Inter",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Juventus",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Lazio",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Lecce",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Milan",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Napoli",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Parma",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Pisa",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Roma",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Sassuolo",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Torino",
        scoredPoints: 0,
        foulsDrawn: 0
    },
    {
        name:"Udinese",
        scoredPoints: 0,
        foulsDrawn: 0
    }
];

//FUNZIONE che popola i valori "scoredPoints" e "foulsDrawn" delle singole squadre
function populateTeams(){
    for(let i = 0; i < teamArray.length; i++){ //Semplicemente itera nell'array di squadre
        const randomPoints = Math.floor(Math.random() * (MAX_POINTS + 1)); //Genera un numero a caso tra 0 e 30 (floor di un random * 31 sarà da 0 a 30)
        const randomFouls = Math.floor(Math.random() * (MAX_FOULS + 1)); // Genera un numero a caso tra 0 e 10
        const currentTeam = teamArray[i]; // Seleziona la squadra corrente
        currentTeam.scoredPoints = randomPoints; //Aggiorna i suo punti con il valore generato prima
        currentTeam.foulsDrawn = randomFouls; //Aggiorna i suoi falli subiti con il valore generato prima
    }
}

//Funzione che estrae un array di oggetti contenenti solo nome e fallo subito dall'array iniziale
function extractFoulArray(teamsArray){
    if(!Array.isArray(teamsArray)){ // Restituiamo codice d'errore se quello che ci viene passato non è un array
        return -1;
    }

    const foulArray = []; // Creiamo l'array che poi restituiremo
    for(let i = 0; i < teamsArray.length; i++){ //Iteriamo nell'array che ci è stato passato in funzione
        const currentTeam = teamsArray[i]; // Selezioniamo la squadra individuata in questo ciclo

        const tempTeam = { // Creiamo una squadra temporanea, conterrà solo nome e falli subiti della squadra corrente
            name: currentTeam.name,
            foulsDrawn: currentTeam.foulsDrawn
        };

        foulArray.push(tempTeam); // La mettiamo nell'array che vogliamo restituire
    }

    return foulArray; // Restituiamo l'array
}

populateTeams(); // Generiamo i numeri per tutte le squadre
const fouledArray = extractFoulArray(teamArray); // Estraiamo l'array con solo nomi e falli subiti
console.log(fouledArray); // logghiamo l'array.