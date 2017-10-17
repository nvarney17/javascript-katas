/* 1.1 - Conditionals with Prompt */

// Conditional where flavor = chocolate or vanilla
// Prompt for flavor then output "heres your" +flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"

var flavor = prompt("Enter a flavor");
if (flavor == "chocolate") {
	alert ("heres your "+flavor+" ice cream");
}
else if (flavor == "vanilla") {
	alert ("heres your "+flavor+" ice cream");
}
else if (flavor == "strawberry") {
	alert ("all out of "+flavor);
}
else {
	alert ("no such flavor");
}