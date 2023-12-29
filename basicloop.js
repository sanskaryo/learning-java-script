var numberOfBottles = 99
while (numberOfBottles >= 1) {
    var bottleWord = "bottle";
    if (numberOfBottles === 0) {
        bottleWord = "bottles";
        console.log("NO bottles left of beer the wall bruhh")
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}