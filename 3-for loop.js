/* 1.3 - For Loop */

// Conditional where flavor = chocolate or vanilla
// Prompt for flavor then output "heres your" +flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"
// Put in a for loop asking for 3 scoops.
// After each scoop, alert "Here's your " +flavor

for (i=1;i<4;i++) {
	var flavor = prompt("Enter a flavor");
	if (flavor == "chocolate" || flavor == "vanilla") {
		alert ("heres your "+flavor+" ice cream");
	}
	else if (flavor == "strawberry") {
		alert ("all out of "+flavor);
		i--;
	}
	else if (flavor == "coffee") {
	alert ("No Coffee Allowed In "+flavor+" School!");
	}
	else {
		alert ("no such flavor");
		i--;
	}
}