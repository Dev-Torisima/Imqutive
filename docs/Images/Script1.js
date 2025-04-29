//Script1.js
//Created by Torisima 2025
//Script1.js => Script2.js

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



e1.addEventListener('change', (a1)=>
{
const c3 = a1.target.files[0];
if (c3)
{
v2 = 1;

const c5 = new FileReader(c3);

c5.onload = function (a2)
{
const c6 = new Image();

c6.onload = ()=>
{
    if (c6.width <= 256 & c6.height <= 256 & c6.width > 0 & c6.height > 0)
        {
        e10.style.visibility = 'collapse';

        v3.width = c6.width;
v3.height = c6.height;

v4.fillStyle = 'rgba(0, 0, 0, 0)';
v4.clearRect(0, 0, v3.width, v3.height);

v4.drawImage(c6, 0, 0);

v1.push(decode(v3.toDataURL("image/png").split(',')[1]));

if (v3.width == 256)
{
    v14.push(0);
}
else
{
    v14.push(v3.width);
}
if (v3.height == 256)
    {
        v15.push(0);
    }
    else
    {
        v15.push(v3.height);
    }

let l10 = document.createElement('img');
l10.src = a2.target.result;
l10.style.width = '25vw';
l10.style.width = '25vw';
l10.style.marginLeft = '10px';
l10.style.marginRight = '10px';
e2.appendChild(l10);

v2 = 1;
        }
        else
        {
        e10.style.visibility = 'visible';

        v2 = 0;
        }
};

c6.src = a2.target.result;
};

c5.onerror = function (a3)
{
e1.files = [];
v2 = 0;
};

c5.readAsDataURL(c3);
}
});

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
