//I wanted to have a Hex to RGB converter that i could use in one of my other projects and after learning how the RGB to hex (and vice-cersa) are calculated i wanted to try it out.
//To go from Hex to RBG you split the 6 digit/letter code into 3 parts, the first two digits, the middle two digits and finally the last two digits.
//You then need to use parseInt to return an integer from the specified radix numeral system. In our case A = 10, B = 11 and so on until F which is F = 15;
//After converting the letters (if needed) you then multiply the first character by 16, then add the second letter or digit in the current batch to return a result from 0 - 255.
//For example, if you have BA for instance, well take B which equals 11, multiply it by 16, which gives us 176, then add A which equals 10 for a result of 186. Thats our first number converted.
//Continue doing this or you can use the built in parse int(currVal, 16) to use built in functions to take care of this for you. Once you have all 3 sets converted, simply concantenate them and you have successfully converted Hex to RGB.
//I added the ability to specify opactiy as well as i am looking to use this in my projects.

function hexToRgb(hex : string, opac : number) {
  let r = hex.slice(1).substring(0,2);
  let g = hex.slice(1).substring(2,4);
  let b = hex.slice(1).substring(4,6);
  let rgb = `rgb(${parseInt(r, 16)},${parseInt(g, 16)},${parseInt(b, 16)}, ${opac}%)`
  console.log(rgb);
  return rgb;
}

console.log(hexToRgb("#EE8130", 60)); //returns: "rgb(238,129,48, 60%)"
