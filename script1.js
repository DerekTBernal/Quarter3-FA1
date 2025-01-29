var nickname = "Derek";
var height = 64;
var weight = 44;

var remainingInches = height % 12;
var feet = (height - remainingInches) / 12;
var weightInPounds = weight * 2.205;

alert(`Name: ${nickname}\nHeight: ${feet}'${remainingInches}\"\nWeight: ${weightInPounds} lbs`);