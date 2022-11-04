const programInitialization = () => {
  console.log(
    "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
  );

  console.log(
    "Expected output of maxOfThree(5,4,44) is 44  " +
      myFunctionTest(44, maxOfThree(5, 4, 44))
  );
  console.log(
    "Expected output of maxOfThree(55,4,44) is 55  " +
      myFunctionTest(55, maxOfThree(55, 4, 44))
  );

  console.log(
    "Expected output of maxOfThree(55,4,44) is 55  " +
      myFunctionTest(4, maxOfThree(55, 4, 44))
  );

  console.log(
    "Expected output of isVower('e') is true  " +
      myFunctionTest(true, isVowel("a"))
  );

  console.log(
    "Expected output of sum([1,2,3,4]) is 10  " +
      myFunctionTest(10, sum([1, 2, 3, 4]))
  );

  console.log(
    "Expected output of multiply([1,2,3,4]) is 24  " +
      myFunctionTest(24, multiply([1, 2, 3, 4]))
  );

  console.log(
    "Expected output of reverse(jag testar) is  ratset gaj " +
      myFunctionTest("ratset gaj", reverse("jag testar"))
  );

  console.log(
    "Expected output of  findLongestWord([Pukar, Navraj, Ujjwal, Karna Bahadur]) is Karna Bahadur " +
      myFunctionTest(
        "Karna Bahadur",
        findLongestWord(["Pukar", "Navraj", "Ujjwal", "Karna Bahadur"])
      )
  );

  console.log(
    "Expected output of  filterLongWords([Pukar, Navraj, Ujjwal, Karna Bahadur],5) is [Navraj, Ujjwal, Karna Bahadur]" +
      myFunctionTest(
        3,
        filterLongWords(["Pukar", "Navraj", "Ujjwal", "Karna Bahadur"], 5)
          .length
      )
  );
};
/** Used to test the created function */
const myFunctionTest = (expected, found) => {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
};

/* max returns the maximum of 2 arguments */
const max = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

/* max3 takes 3 numbers as arguments and returns the largest */
const maxOfThree = (a, b, c) => {
  return max(max(a, b), c);
};

// Finds if the character is a vowel or not
const isVowel = (val) => {
  if (val.length > 1) return false;
  const valLower = val.toLowerCase();
  if (
    valLower === "a" ||
    valLower === "e" ||
    valLower === "i" ||
    valLower === "o" ||
    valLower === "u"
  )
    return true;
  return false;
};

// finds sum of elements in an array
const sum = (arr) => {
  return arr.reduce((prev, next) => prev + next, 0);
};

// finds product of elements in an array
const multiply = (arr) => {
  return arr.reduce((prev, next) => prev * next, 1);
};

// Finds reverse of a string
const reverse = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str.charAt(i);
  }
  return reversedStr;
};

//Finds the longest word from an array of strings
const findLongestWord = (arr) => {
  let largestElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largestElement.length < arr[i].length) largestElement = arr[i];
  }

  return largestElement;
};

//filters the words larger than i in the given array
const filterLongWords = (arr, i) => {
  return arr.filter((item) => item.length > i);
};

/*
// This block of code contains the modified version of jsfiddle.


const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem * 10;
});
document.writeln(b.toString() + "<br/>");
const c = a.filter(function (elem, i, array) {
  return elem === 3;
});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function (prevValue, elem) {
  return prevValue * elem;
}, 1);
document.writeln(d + "<br/>");
*/
window.addEventListener("load", programInitialization);
