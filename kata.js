/**
 * Created by win808mac on 8/15/16.
 */


//First Last Six - Given an array of integers, return true if 6 appears
//as either the first or last element in the array. The array will be length 1 or more.
function firstLast6(list) {
    return (list[0] == 6 || list[list.length - 1] == 6)

}
var list = [1, 2, 6];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
list = [1, 2, 3, 1];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
list = [1, 2, 1];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
list = [5, 6, 6, 7];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
list = [6, 5, 5, 7];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
list = [4, 7, 6];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
console.log("");

//Same First Last - Given an array of integers, return true if the array is
//length 1 or more, and the first element and the last element are equal.

function sameFirstLast(list) {
    return (list[0] == list[list.length - 1] && list.length >= 1);

}
var list = [1, 2, 3];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [1, 2, 3, 1];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [1, 2, 1];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [6, 2, 7, 6];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [6, 4, 5, 3];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [8, 0, 0, 8];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
console.log("");

//Rotate Left - Given an array of integers length 3, return an array with
//the elements "rotated left" so [1, 2, 3] yields [2, 3, 1].

function rotateLeft(list) {
    console.log("Example of rotateLeft", list, "->>", list[1], list[2], list[0]);


}
list = [1, 2, 3];
rotateLeft(list);
list = [0, 0, 7];
rotateLeft(list);
list = [5, 11, 9];
rotateLeft(list);
list = [4, 6, 8];
rotateLeft(list);
list = [10, 12, 14];
rotateLeft(list);
list = [44, 55, 66];
rotateLeft(list);
console.log("");

//Reverse 3 - Given an array of Integers length 3, return a new array with
//the elements in reverse order, so [1, 2, 3] becomes [3, 2, 1].

function reverse3(list) {
    console.log("Example of reverse3", list, "->>", list[2], list[1], list[0]);

}
list = [1, 2, 3];
reverse3(list);
list = [5, 11, 9];
reverse3(list);
list = [7, 0, 0];
reverse3(list);
list = [9, 6, 3];
reverse3(list);
list = [22, 44, 66];
reverse3(list);
list = [3, 2, 1];
reverse3(list);
console.log("");


//Sum First Penultimate - Given an array of integers of at least length 2,
//return the sum of the first elements in the array and the second from last element.
//If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

function sumFirstPen(list) {
    if (list.length <= 2) {
        return list[0] + list[1];
    }
    else {
        return list[0] + list[list.length - 2];
    }
}
list = [1, 2, 3];
console.log("Example of sumFirst Penultimate", list, "->> ", sumFirstPen(list));
list = [1, 1, 1, 1];
console.log("Example of sumFirst Penultimate", list, "->> ", sumFirstPen(list));
list = [1, 2, 3, 4];
console.log("Example of sumFirst Penultimate", list, "->> ", sumFirstPen(list));
list = [2, 3];
console.log("Example of sumFirst Penultimate", list, "->> ", sumFirstPen(list));
list = [3, 2];
console.log("Example of sumFirst Penultimate", list, "->> ", sumFirstPen(list));
list = [2, 4, 6, 4, 9];
console.log("Example of sumFirst Penultimate", list, "->> ", sumFirstPen(list));
