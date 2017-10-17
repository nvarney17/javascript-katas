/* 1.2 - For Loop */

// Conditional where flavor = chocolate or vanilla
// Prompt for flavor then output "heres your" +flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"
// Continue while flavor not equal to "coffee"
// Then write "No Coffee Allowed in School!"

do{
	var flavor = prompt("Enter a flavor");
	if (flavor == "chocolate" || flavor == "vanilla") {
		alert ("heres your "+flavor+" ice cream");
	}
	else if (flavor == "strawberry") {
		alert ("all out of "+flavor);
	}
	else if (flavor == "coffee") {
	alert ("No Coffee Allowed In "+flavor+" School!");
	}
	else {
		alert ("no such flavor");
	}
}
while(flavor != "coffee");