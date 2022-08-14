// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Solution no 1 
function anagrams(stringA, stringB){

    return cleanString(stringA) === cleanString(stringB);

}

function cleanString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}


module.exports = anagrams;

//Solution no 2
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharmap = buildCharMap(stringB);


//     if(Object.keys(aCharMap).length !== Object.keys(bCharmap).length){
//         return false;
//     }
//     for(let char in aCharMap){

//             if(aCharMap[char]!== bCharmap[char]){
//                 return false;
//             }
//     }
//     return true;

// }


// function buildCharMap(str){

//     let charMap = {};

//     for(let char of str.replace(/[^\w]/g)){

//         charMap[char] = charMap[char] + 1 | 1;
//     }

//     return charMap;
// }
