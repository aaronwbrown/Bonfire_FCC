// ** CODECAMP BONFIRE CHALLENGES ** //

// building functions for use with arrays // 
var map = function(collection, iterator) {
    var result = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            result.push(iterator(collection[i], i, collection));
        }
    } else {
        for (var key in collection) {
            result.push(iterator(collection[key], key, collection));
        }
    }
    return result;
}

var reduce = function(collection, iterator, accumulator) {
    var flag = false;
    if (accumulator === undefined) {
        accumulator = collection[0];
        flag = true;
    } else {
        accumulator = accumulator;
    }
    map(collection, function(value, key, collection) {
        if (flag === true && key === 0) {
            return;
        } else {
            accumulator = iterator(accumulator, value, key, collection);
        }
    })
    return accumulator;
};

each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
        for (var key in collection) {
          iterator(collection[key], key, collection);
    }
  }
};


indexOf = function(array, target){
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;
    each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });
    return result;
  };

// var myArr = [3,5,5,3,6,4,3,4,3];
// var myIndex = indexOf(myArr, 6);
// console.log(myIndex);
// var myString = "No pants in the River".toLowerCase().split(" ");
// console.log(myString);
// console.log(indexOf(myString, "pants"));

// // ** CODECAMP BONFIRE CHALLENGES ** //

// // **** REVERSE STRING **** //

function reverseString(str) {
  var result = "";
  for (var i = str.length-1; i >= 0; i--) {
    result += str[i];
  }
  
  return result;
}

reverseString("hello");

// **** FACTORIALIZE **** //

function factorialize(num) {
//  5! = 1 * 2 * 3 * 4 * 5 = 120
//  need to start at 1, and go up to the input num
    if (num === 0) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}

factorialize(5);

// **** TRUTHY FALSEY PALINDROME **** //

function palindrome(str) {
  var strStripped = str.toLowerCase().replace(/\W|_/g, ''); // strip all non-alphanumeric values
  var strReversed = strStripped.split('').reverse().join(''); // reverse the stripped string
  return (strReversed === strStripped); // compare the two strings
}

palindrome("mee,y,eem");

// **** Return longest word **** //

// function findLongestWord(str) {
// // splitting the array on spaces will allow me to isolate each word
//     var result = [];
//     var strArray = str.split(" ");
// // console.log(strArray);
// // running a for loop can give me the length of each word
//     for (var i = 0; i < strArray.length; i++) {
//         result.push(strArray[i].length);
//     }    
//     var topSort = result.sort(function(a, b) {
//         return b - a;
//     });
//     return topSort[0];
// }

function findLongestWord(str) {
    var strArray = str.split(" ");
    console.log(strArray);
    // I'm going to use map and indexOf to find the longest word and return it -- reduce may be a cool way to do it, too
    // if () {
    //     findLongestWord()
    // }
    // first find the length of each sring item and put it in a new array
    // with that new array I can get the indexOf the largest value in the array by comparing with sort
    var mappedLengthsArray = map(strArray, function(item) {
        return item.length;
    });
    var mappedLengthsArraySorted = mappedLengthsArray.sort(function(a, b) {
        return b - a;
    });
    var getLongestWordLength = mappedLengthsArraySorted[0];
    var indexOfLongestWord = indexOf(mappedLengthsArray, getLongestWordLength)
    return indexOfLongestWord; // for some reason this keeps returning 0. 
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// **** TITLE CASE ALL WORDS **** //
// Map is my best resource for this problem. 

function titleCase(str) {
    var strArray = str.toLowerCase().split(" ");
    var mapped = map(strArray, function(item) {
        return item.charAt(0).toUpperCase() + item.substring(1, item.length);
    });
    return mapped.join(" ").replace(/[^\w\s']/gi,  ''); // I can't seem to get the extra \ to go away
    
}

titleCase("sHoRt AnD sToUt");

// **** RETURN LARGEST NUMBERS **** //

function largestOfFour(arr) {
    var result = map(arr, function(item) {
        return item.sort(function(a, b) {
            return b - a;
        })
    })
    var resultMapped = map(result, function(item) {
        return item[0];
    })
    return resultMapped;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

// **** Confirm the Ending **** //

function end(str, target) {
  var myStr = str.toLowerCase().split(" ");
  console.log(myStr);
  var strLength = myStr.length;
  console.log(strLength);
  if (strLength === 1) {
    var mySplitStr = myStr.join("").split("");
    return mySplitStr[mySplitStr.length - 1] === target;
  } else {
        return myStr[myStr.length - 1] === target;
  }
}

end("He has to give me a new name", "name");
