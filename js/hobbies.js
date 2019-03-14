const hobbiesArray = [
    {name: 'volleyball', lengthInYears: 25},
    {name: 'cooking', lengthInYears: 12},
    {name: 'swimming', lengthInYears: 28}
];

function printHobby(hobby){
    console.log(`${hobby.name} enjoyed for ${hobby.lengthInYears} `) 
}
    
    for(let index = 0; index < hobbiesArray.length; index++){
        printHobby(hobbiesArray[index]);
 }