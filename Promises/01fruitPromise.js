
let myList = ["Rice", "Pineapple", "Orange", "Meat", "Fish", "Apple", "Watermelon"];

let foodCheck = (item, array) => {
    
    let itemIndex = array.indexOf(item);

    return new Promise( (resolve, reject) => {
        if(itemIndex !== -1){return resolve(array[itemIndex]);}
        reject(`Food item not found`);
    });
}

foodCheck("Rice", mestring)
    .then((reply) => {console.log(`Food item ${reply} was found!!!`)})
    .catch((err) => {console.log(`${err}`)});