/*
A small challenge to recreate how Outlook recognises that a user might have left the CAPS-LOCK key on by mistake.
This will only return a properly capitalised word if only the first letter is lower-case and the rest is upper-case.
*/

//SOLUTION

var capsLockError = function(str : string) {
  if (str.substring(0,1) === str.substring(0,1).toLowerCase() && str.substring(1) === str.substring(1).toUpperCase())
  return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
  else return str;
}

console.log(capsLockError("sTRING")) // returns => "String" - PASS
console.log("sTRINg") // returns => "sTRINg" - PASS
console.log("sTRiNg") // returns => "sTRiNg" - PASS
