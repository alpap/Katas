function disemvowel(str) {
  return str.replace(/[aeuio]/gi, "");
}

var phrase = "This website is for losers LOL!";
var res = disemvowel(phrase);
console.log(res);

var phrase = "I have A very bIg Banana";
var res = disemvowel(phrase);
console.log(res);

var phrase = "Jnow when to code with your ass";
var res = disemvowel(phrase);
console.log(res);
