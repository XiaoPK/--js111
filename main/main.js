function beer(number){
    let str = "";
    if(number > 1){
        str += number + " bottles of beer on the wall, "+number+" bottles of beer.\n";
        str += "Take one down and pass it around, " +(number-1) +" bottles of beer on the wall.";
        //console.log(str);
        return str;
    }
    if(number === 1){
        str += number + " bottle of beer on the wall, "+number+" bottle of beer.\n";
        str += "Take one down and pass it around, no more bottles of beer on the wall.";
        //console.log(str);
        return str;
    }
    if(number === 0){
        str +="No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
        return str;
    }
}

module.exports = beer;