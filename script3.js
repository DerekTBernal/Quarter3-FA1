/* Code from item no. 1 to redefine variables */
var nickname = "Derek";
var height = 64;
var weight = 44;

var remainingInches = height % 12;
var feet = (height - remainingInches) / 12;
var weightInPounds = weight * 2.205;

/* Actual item no.3 code */
var consentToShare = confirm("Do you agree to your personal information being shared in this site?");
if (consentToShare) {
    console.log(`Name: ${nickname}\nHeight: ${feet}'${remainingInches}\"\nWeight: ${weightInPounds} lbs`);
} else {
    console.log("User does not wish to share his/her information.");
}