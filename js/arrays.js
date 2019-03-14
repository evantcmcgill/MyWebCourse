let hobbiesArray = ['coding', 'watching movies', 'generally crushing it'];

function printHobbies(hobbies){
    console.log(`I like ${hobbies.length} things`);
    for(let index = 0; index < hobbies.length; index++){
        let element = hobbies[index];
        console.log('I like ' + element)
    }
}
printHobbies(hobbiesArray);