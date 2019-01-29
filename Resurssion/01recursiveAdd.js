
function recursiveAdder(number){
    if (number == 0){
        return 0;
    }else if(number == 1){
        return 1;
    }else{
        return number + recursiveAdder(number - 1);
    }
}

console.log(recursiveAdder(5));