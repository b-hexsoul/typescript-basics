"use strict";
// boolean
var isCool = true;
// number
var age = 31;
// string
var eyeColor = 'blue';
var quote = "I'm not old, i'm only " + age;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
var pets3 = [5, 'lion', true];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var niu = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum - allows us to define a set of named constants. 
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// Any - not recommended often - 
var whatever = 'a;skdfjklasj';
// void - when a function doesn't return anything 🤷‍♂️ 
var sing = function () {
    console.log('lalallaal');
};
// never - will test two things: 1) function never returns 2) when an error is thrown typescript infers a never type
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
// dangerous - so be careful
var dog = {};
dog.count;
// Function
var fightRobotArmy1 = function (robots) {
    console.log('FIGHT!');
    return 5;
};
// Class - can set things to private!
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
