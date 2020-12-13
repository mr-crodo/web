function changeSpaceToUnderscore(text) {
  var resultText = text.replace(/ /g, "_");
  return resultText;

  // Insert modified string in paragraph
  // document.getElementById("myText").innerHTML = newStr;
}


console.log(changeSpaceToUnderscore("create function"));
console.log(changeSpaceToUnderscore("my first name"));
console.log(changeSpaceToUnderscore("Hello baby hove are you? lisson cam hare"));

