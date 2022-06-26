// Code your solution here
function findMatching(arrayOfNames, string) {
    return arrayOfNames.filter(
      (name) => name.toLowerCase() === string.toLowerCase()
    );
  }
  
  function fuzzyMatch(source, letter) {
    return source.filter(
      (name) =>
        name.toLowerCase().indexOf(letter.toLowerCase()) === 0
    );
  }
  
  function matchName(array, soughtName) {
    return array.filter((record) => record.name === soughtName);
  }