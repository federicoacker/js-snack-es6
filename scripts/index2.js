const MAX_POINTS = 30;
const MAX_FOULS = 10;
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

function populateTeams(){
    for(let i = 0; i < teamArray.length; i++){
        const randomPoints = Math.floor(Math.random() * (MAX_POINTS + 1)); //Genera un numero a caso tra 0 e 30 (floor di un random * 31 sarà da 0 a 30)
        const randomFouls = Math.floor(Math.random() * (MAX_FOULS + 1)); // Ggenera un numero a caso tra 0 e 10
        const currentTeam = teamArray[i];
        currentTeam.scoredPoints = randomPoints;
        currentTeam.foulsDrawn = randomFouls;
    }
}