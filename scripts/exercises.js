(function () {
    'use strict';

    // ---------------------
    // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
    // ---------------------

    /* This function returns the max of two numbers*/
    /* It takes two nums which are number values*/
    /* It returns the larger of the two numbers*/

    function max(num1, num2) {
        if (num1 > num2) {
            return num1;
        } else if (num1 < num2) {
            return num2;
        } else {
            return `these values are equal`
        }
    }

    // ---------------------
    // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
    // ---------------------

    /* This function returns the max of three numbers*/
    /* It takes three nums which are number values*/
    /* It returns the largest of the three numbers*/

    function maxOfThree(num1, num2, num3) {
        if (num1 > num2 && num1 > num2) {
            return num1;
        } else if (num2 > num1 && num2 > num3) {
            return num2;
        } else if (num3 > num1 && num3 > num2) {
            return num3;
        } else {
            return `one or more numbers are equal`;
        }
    }

    // ---------------------
    // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
    // ---------------------

    /* This function tells you if a character is a vowel or not*/
    /* It takes one a parameter of one character or a string of one*/
    /* It returns true or false (true if it's a value, false if not)*/

    function isVowel(character) {
        if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
            return true;
        } else {
            return false;
        }
    }

    //could have used:
  function isVowel(char) {
      return 'aeiou'.includes(char);
  }
//because .includes is a boolean function and it returns true/false.
  const isVowel = (char) => 'aeiou'.includes(char);


    // ---------------------
    // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
    // ---------------------

    /* This function doubles every consonant. It also puts an o inbetween the double consonants.*/
    /* It takes a string parameter of indeterminate length*/
    /* It returns a string parameter that will be altered to double the consonants and add an o inbetween*/

    function rovarspraket(sentence) {

        let updatedSentence = ""
        for (let i = 0; i < sentence.length; i++) {
            if (sentence.charAt(i) === 'a' || sentence.charAt(i) === 'e' || sentence.charAt(i) === 'i' || sentence.charAt(i) === 'o' || sentence.charAt(i) === 'u' || sentence.charAt(i) === ' ') {
                updatedSentence += sentence.charAt(i);
            } else {
                updatedSentence += sentence.charAt(i) + "o" + sentence.charAt(i);
            }
        }
        // console.log('rovar', updatedSentence);
        return updatedSentence;
    }

    //could have:

    function rovarspraket(text) {
        const textArr = textArr.toLowerCase().split('');
        for (let i = 0; i < textArr.length; i++) {
            if('bcdfghjklmnprstovwxyz'.includes(textArr[i])) {
                textArr[i] = textArr[i] + 'o' + textArr[i];
            }
        }
        return textArr.join('');
    }
//or (this still changes it to an array, it just calls it 'text' the whole time.)
    function rovarspraket(text) {
        text = text.toLowerCase().split('');
        for (let i = 0; i < textArr.length; i++) {
            if('bcdfghjklmnprstovwxyz'.includes(text[i])) {
                text[i] = text[i] + 'o' + text[i];
            }
        }
        return textArr.join('');
    }
//or, this version calls a function against each part of the array we make.
let translation = '';
text.toLowerCase().split('').forEach(char => {
    "bcdfghjklmnpqrstvwxyz".includes(char) ? translation += `${char}o${char}` : translation += char;
})

// testing against consonants is better than vowels because there are a large number of symbols we may have to account for, like $ or %.

    // ---------------------
    // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
    // ---------------------

    /* This first function adds numbers in an array. The second function multiplies numbers in an array*/
    /* The functions take an array*/
    /* The functions return a number*/

    function sum(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
    return total;
    }

    function multiply(arr) {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
            product *= arr[i];
        }
        return product;
    }

//could have:

const sum = arr => arr.reduce((acc,i) => acc +i);


    // ---------------------
    // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
    // ---------------------

    /* The function reverses the order of the characters of a string*/
    /* The input is a string*/
    /* The output is a string, reversed*/

    function reverse(forwardSentence) {
        let backwardSentence = ""
        for (let i = forwardSentence.length; i > -1; i--) {
            backwardSentence += forwardSentence.charAt(i);
        }
        return backwardSentence;
    }

//didn't need "charAt" could have just said "forwardSentence[i];"

//could have also: (the order of the addition on the newString line makes it reversed.)
function reverse (str) {
    let newString = "";
    for (let i=0; i < str.length; i++) {
        newString = str [i] + newString;
    }
    return newString;
}

const reverse = string => string.split('').reverse().join('')

    // ---------------------
    // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------

    /*The function takes an array of different words and returns the length of the longest word in the array */
    /*The input is an array of many words*/
    /*The output is a number*/
    
    function findLongestWord(arr) {
        let arrayLengths = [];
        for (let i = 0; i < arr.length; i++) {
            arrayLengths.push(arr[i].length);
        }
        let numberOfLetters = Math.max(...arrayLengths)
        return numberOfLetters;

    }
  //  could have:
    function findLongestWord(arr) {
        let length = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i].length > length) {
                length = arr[i].length;
            }
        }
        return length;
    }
//need to look into changing variables within for loops more. 
//set variable to 0 so you always get a value back, instead of undefined for an empty array.

    // ---------------------
    // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------

    /* This function takes an array of words and an integer and returns the array of words that are longer than that integer*/
    /* This function takes in an array and a separate parameter i which is a number*/
    /* This function returns an array */

    function filterLongWords(arr, i) {
        let shortenedArray = [];
        for (let x = 0; x < arr.length; x++) {
            if (arr[x].length > i) {
                shortenedArray.push(arr[x])} 
            }
        return shortenedArray;
        }
//could have also:
const filterLongWords = (arr,i) => arr.filter(word => word.length >i);

    // ---------------------
    // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
    // ---------------------

    /* This function determines the frequency of each character in a string and puts it in an object.*/
    /* This function takes a string as the input. */
    /* This function outputs an object.*/

    //I could make a new string with the correct values. and then count that length. but i'm unsure how you'd make sure you got all the potential characters in the string. 

    function charFreq(str) {
        let totals = {};
        for (let i = 0; i < str.length; i++) {
            let character = str[i];
            if (totals.hasOwnProperty(character)) {
                totals[character] = totals[character]+1;
        } else { 
            totals[character] = 1;
        }
    }
        return totals;

//could have also:
//because if you call a property that doesn't exist you get undefined = false.
    function charFreq(str) {
        const freqList = {};
        for (let i = 0; i < str.length; i++ ) {
            if(freqList(str[i])) { 
                //if str[i] exists
                freqList[str[i]] = freqList[str[i]] +1;
            } else {
                //if that property is undefined.
                freqList[str[i]] = 1;
            }
        }
    }
}
//could have also:

function charFre(str) {
    const freqList = {};
    str.split (''.forEach(char => freqList[char] = freqList[char] + 1 || 1);
    return freqList;
    
}
    ////////////////////////////////////////////////////////////////////////
    /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
    ////////////////////////////////////////////////////////////////////////

    console.assert(max(2, 4) === 4, 'function max error');

    console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

    console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

    console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR function maxOfThree');

    console.assert(isVowel('a') === true, 'ERROR function isVowel');

    console.assert(isVowel('b') == false, 'ERROR function isVowel');

    console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

    console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

    console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

    console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

    console.assert(findLongestWord(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

    console.assert(filterLongWords(['hello', 'world', 'does', 'anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

    console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();