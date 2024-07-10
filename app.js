console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let j = 1; j <= 100; j++)
{
    if(j % 3 == 0 && j % 5 != 0)
    {
        console.log("FIZZ");
    }
    else if(j % 5 == 0 && j % 3 != 0)
    {
        console.log("BUZZ");
    }
    else if(j % 3 == 0 && j % 5 == 0)
    {
        console.log("FIZZBUZZ");
    }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let k = 1;
while(k <= 100)
{
    if(k % 2 != 0)
    {
        console.log(k);
    }
    k++;
}
let l = 1;
do
{
    if(l % 3 == 0 && l % 5 != 0)
    {
        console.log("FIZZ");
    }
    else if(l % 5 == 0 && l % 3 != 0)
    {
        console.log("BUZZ");
    }
    else if(l % 3 == 0 && l % 5 == 0)
    {
        console.log("FIZZBUZZ");
    }
    l++;
}while(l <= 100)
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let m = 0; m <= n; m++)
{
    if(m == value)
    {
        console.log("Found Value!");
        break;
    }
    else if(m == n && m != value)
    {
        console.log("Value not found");
        break;
    }
}