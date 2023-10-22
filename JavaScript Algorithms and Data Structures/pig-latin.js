function translatePigLatin(str) {
  let consonantsReg = /^[^aeiou]+/;
  let consonants = str.match(consonantsReg); // return matched value
  return consonants !== null
    ? str
        .replace(consonantsReg, "")
        .concat(consonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("glove");