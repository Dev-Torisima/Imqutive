//Tools/Script1.js
//Created by Torisima 2025

var e1 = document.getElementsByClassName("e1")[0];
var e2 = document.getElementsByClassName("e2")[0];
var e3 = document.getElementsByClassName("e3")[0];

e1.addEventListener('change', f1);
e2.addEventListener('change', f1);

function f1()
{
    let j = 0;
    let i = 0;

    if (e2.value == "")
    {
        e3.innerHTML = "0";
    }
    else
    {
while(true)
{
    j = e1.value.indexOf(e2.value, j);

    if (j == -1) 
    {
        break;
    }
else 
{
    i += 1;
    j += 1;
}
}

e3.innerHTML = i.toString(10);
}
}
