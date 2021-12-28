
function showPrimeNumbers(limit){
    for(let number = 2; number <= limit; number++){
        let isTub = true;
        for(let factor = 2; factor < number; factor++){
            if(number % factor === 0){
                isTub = false;
                break;
            }
        }
        if(isTub) console.log(number);   
    }
}

showPrimeNumbers(20)