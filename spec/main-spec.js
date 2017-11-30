'use strict';
let beer = require("../main/main.js");

describe('99 bottoles of beer', function() {
    it('return when the given number bigger than 1',function(){
        let result = beer(99);
        expect(result).toEqual("99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.");
    });
    it('return when the given  number equal to 1',function(){
        let result = beer(1);
        expect(result).toEqual("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.");
    });
    it("return when the given number equal to 0",function(){
        let result = beer(0);
        expect(result).toEqual("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
    });
});