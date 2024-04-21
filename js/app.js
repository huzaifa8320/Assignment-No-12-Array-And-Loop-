// Task No 1

document.write("<h1>Task No 1</h1>")
var empty_Array = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
document.write(empty_Array[0] + "<br>" + empty_Array[1] + "<br>" + empty_Array[2])

// Task No 2

document.write("<h1>Task No 2</h1>")
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");

}

// Task No 3

document.write("<h1>Task No 3</h1>")
var table_Num = prompt("Enter a number to show its multiplication table")
var length_Table = prompt("Enter length multiplication table")
for (var i = 1; i <= length_Table; i++) {
    document.write(table_Num + " " + "x" + " " + [i] + " " + "=" + " " + table_Num * i + "<br>");
}

// Task No 4

document.write("<h1>Task No 4</h1>")
var fruits = ["Apple", "Mango", "Banana", "Orange", " Strawberry"]
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("<br>")
for (var i = 0; i < fruits.length; i++) {
    document.write(`Element at index of ${fruits.indexOf(fruits[i])} is ${fruits[i]} <br>`);
}

// Task No 5

document.write("<h1>Task No 5</h1>")
var counting=[]
for (var i = 1; i <=15; i++) {
    counting.push(`${[i]}`);
}
document.write(`Counting: ${counting}`)
document.write("<br>")

var reverse = []
for (var i = 10; i >=1; i--) {
    reverse.push(`${[i]}`);
}
document.write(`Reverse counting: ${reverse}`)
document.write("<br>")

var even = []
for (var i = 0; i <=20; i +=2) {
    even.push(`${[i]}`);
}
document.write(`Even: ${even}`)
document.write("<br>")

var odd = []
for (var i = 1; i <=19; i +=2) {
    odd.push(`${[i]}`);
}
document.write(`Odd: ${odd}`)
document.write("<br>")

var series = []
for (var i = 2; i <=20; i +=2) {
    series.push(`${[i]}k `);
}
document.write(`Series: ${series}`)
document.write("<br>")

// Task No 6

document.write("<h1>Task No 6</h1>")
var item = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
var item_search = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am").toLowerCase()
flag = false
for (var i = 0; i <item.length; i++) {
    if(item[i] == item_search){
        flag = true
        alert(`${item_search} is available at index ${item.indexOf(item_search)}`)
    }
    else{
        alert(`We are sorry ${item_search} is not available in our bakery`)
    }
    break
}
if (flag==true){
    document.write("Found")
}
else{
    document.write("Not Found")
}

// Task No 7

document.write("<h1>Task No 7</h1>")
var largest1 = [24, 53, 78, 91, 12]
var maximum = largest1[0]
for (var i = 0; i <largest1.length; i++) {
    if(largest1[i] > maximum){
        maximum = largest1[i]
    }
}
document.write(`Array item: ${largest1}<br>`)
document.write(`Largest no is ${maximum}`)


// Task No 8

document.write("<h1>Task No 8</h1>")
var largest2 = [24, 53, 78, 91, 12]
var minimum = largest2[0]
for (var i = 0; i <largest2.length; i++) {
    if(largest2[i] < maximum){
        minimum = largest2[i]
    }
}
document.write(`Array item: ${largest2}<br>`)
document.write(`Minimum no is ${minimum}`)

// Task No 9

document.write("<h1>Task No 9</h1>")
var multyple=[]
for (var i = 5; i<=100; i+=5) {
     multyple.push(i)
}
document.write(multyple)