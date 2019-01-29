
let sampleObject = {name: "Luke Skywalker", occupation: "Jedi", powers: "The force", age: 30}

for (let key in sampleObject){
    console.log(`${key} => ${sampleObject[key]}`);
}