//Script1.js
//Copyright (c) Torisima 2025

var p1 = document.getElementsByClassName("p1")[0];

var e1 = document.getElementsByClassName("e1")[0];
var e2 = document.getElementsByClassName("e2")[0];

var e7 = document.getElementsByClassName("e7")[0];
var e8 = document.getElementsByClassName("e8")[0];
var e9 = document.getElementsByClassName("e9")[0];
var e10 = document.getElementsByClassName("e10")[0];

var v1 = [];
var v2 = 0;
var v3 = document.createElement('canvas');
var v4 = v3.getContext("2d");
var v14 = [];
var v15 = [];



e7.addEventListener('click', ()=>
    {
        e2.replaceChildren();
        v1 = [];
        v14 = [];
        v15 = [];
    });


function encode(data)
{
    let l5 = "";
    for (let i =0; i < data.length; i++)
{
    l5 += String.fromCharCode(data[i])
}
    return btoa(l5);
}

function decode(data)
{
return Uint8Array.from(atob(data), c => c.charCodeAt(0));
}
