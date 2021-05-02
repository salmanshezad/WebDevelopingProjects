//function that display value

function display(val)

{

document.getElementById("result").value+=val

}

//function that evaluates the digit and return result

function make_solution()

{

let x = document.getElementById("result").value

let y = eval(x)

document.getElementById("result").value = y

}

//function that clear the displayplay

function clr()

{

document.getElementById("result").value = ""

}