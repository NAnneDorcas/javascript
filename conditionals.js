var num1, num2;
num1 = prompt("Enter the first number: ");
num2 = prompt("Enter the second number: ");
if (num1 > num2) 
{
    console.log("The larger number is " + num1 );
} 
else if ( num1 < num2) {
    console.log("The larger number is " + num2);
}
else if (num1 === num2) {
    console.log("Both numbers are equal!")
} 
else {
    console.log("Please add an integer!");

}

 