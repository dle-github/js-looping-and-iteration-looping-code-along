// Code your solutions in this file

function writeCards(names, gift){
    let arr = []
    for (let i=0; i<names.length; i++){
        arr.push("Thank you, "+ names[i] +", for the wonderful "+ gift +" gift!")
    }
    return arr;
}

function countDown(){
    let countdown = 10;
    while (countdown >= 0) {
        console.log(countdown--);
    } 
}