// business logic:
function treatQu(word) {
  if (word.slice(0, 2).toLowerCase() === "qu") {
    return word.slice(2) + "qu" + "ayac";
  }
  return "";
}

function firstVowelIndex(word) {
  let vowels = "aeiou";
  let vIndex = -1;
  let flag = false;
  let wordCharacters = word.split("");
  wordCharacters.forEach(function (element, index) {
    if (vowels.includes(element.toLowerCase()) && flag === false) {
      vIndex = index;
      flag = true;
    }
  });
  return vIndex;
}

function treatVowel(word) {
  let vIndex = firstVowelIndex(word);
  if (vIndex === 0) {
    return word + "acedu";
  } else {
    return "";
  }
}

function treatConsonant(word) {
  let vIndex = firstVowelIndex(word);
  if (vIndex > 0 || vIndex === -1) {
    let firstPart = word.slice(0, vIndex);
    let secondPart = word.slice(vIndex);
    return secondPart + firstPart + "ayac";
  } else {
    return "";
  }
}

function wPigLatin(word) {
  let result = treatQu(word);
  if (result === "") {
    result = treatConsonant(word);
  }
  if (result === "") {
    result = treatVowel(word);
  }
  return result;
}


function pigLatin(sentence) {
  let sentenceWords = sentence.split(" ");
  let wordResult = "";
  sentenceWords.forEach(function (element) {
    wordResult += wPigLatin(element) + " ";

  });
  return wordResult.trim();
}

// UI Logic:

$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const text = $("#text-passage").val();
    const encrypt = pigLatin(text);
    $("#word").val(encrypt);
  })
})