/*
Given a string, determine whether it is a valid CSS hsl() color value.

A valid HSL value must be in the format "hsl(h, s%, l%)", where:

h (hue) must be a number between 0 and 360 (inclusive).
s (saturation) must be a percentage between 0% and 100%.
l (lightness) must be a percentage between 0% and 100%.
Spaces are only allowed:

After the opening parenthesis
Before and/or after the commas
Before and/or after closing parenthesis
Optionally, the value can end with a semi-colon (";").

For example, "hsl(240, 50%, 50%)" is a valid HSL value.
*/

//SOLUTION

function isValidHSL(hsl) {
  const regex = /(hsl){1}(\(\s*){1,}((0{0,2}[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9]|360))\s*,\s*(0{0,2}[0-9]|0?[1-9][0-9]|100)%\s*,\s*(0{0,2}[0-9]|0?[1-9][0-9]|100)%\s*;?\)/g;
  return regex.test(hsl);
}

//This is absolutey not the best way to do this but i wanted to test my regex skills and thought this would be a good way to do it.
