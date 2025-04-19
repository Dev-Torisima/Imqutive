//Script1.js
//Created by Torisima 2025

var e1 = document.getElementsByClassName("e1")[0];
var e2 = document.getElementsByClassName("e2")[0];
var e3 = document.getElementsByClassName("e3")[0];
var e4 = document.getElementsByClassName("e4")[0];
var e5 = document.getElementsByClassName("e5")[0];
var e6 = document.getElementsByClassName("e6")[0];
var e7 = document.getElementsByClassName("e7")[0];
var e8 = document.getElementsByClassName("e8")[0];
var e9 = document.getElementsByClassName("e9")[0];
var e10 = document.getElementsByClassName("e10")[0];

var v1 = [new Uint8Array(), new Uint8Array(), new Uint8Array(), new Uint8Array(), new Uint8Array(), new Uint8Array(), new Uint8Array()];
var v2 = 0;
var v3 = document.createElement('canvas');
var v4 = v3.getContext("2d");



e1.addEventListener('change', (a) => f2(a, 1));
e2.addEventListener('change', (a) => f2(a, 2));
e3.addEventListener('change', (a) => f2(a, 3));
e4.addEventListener('change', (a) => f2(a, 4));
e5.addEventListener('change', (a) => f2(a, 5));
e6.addEventListener('change', (a) => f2(a, 6));
e7.addEventListener('change', (a) => f2(a, 7));

e8.addEventListener('click', ()=>
{
if (v2 == 1)
{
v2 = 9;

e9.href = f1();

v2 = 1;
}
});



function f1()
{
let l1 = 0;

let l4 = [];
let l5 = 0;

for (let i = 0; i < v1.length; i++)
{
    if (v1[i].length != 0)
    {
        l4.push(i);
        l5 += v1[i].length;
    }
}

let l2 = new ArrayBuffer(6 + l4.length * 16 + l5);
let l3 = new DataView(l2);



l3.setUint8(0, 0x00);
l3.setUint8(1, 0x00);
l3.setUint8(2, 0x01);
l3.setUint8(3, 0x00);
l3.setUint16(4, l4.length, true);

l1 += 6;

if (l4.length != 0)
{
    let l6 = 16 * l4.length + 6;
for (let i = 0; i < l4.length; i++) 
    {
    l3.setUint8(l1 + 0, f3(l4[i]));
l3.setUint8(l1 + 1, f3(l4[i]));
l3.setUint8(l1 + 2, 0x00);
l3.setUint8(l1 + 3, 0x00);
l3.setUint8(l1 + 4, 0x01);
l3.setUint8(l1 + 5, 0x00);
l3.setUint8(l1 + 6, 0x20);
l3.setUint8(l1 + 7, 0x00);
l3.setUint32(l1 + 8, v1[l4[i]].length, true);
l3.setUint32(l1 + 12, l6, true);

new Uint8Array(l2).set(v1[l4[i]], l6);

l1 += 16;
l6 += v1[l4[i]].length;
}
}

return "data:image/vnd.microsoft.icon;base64," + encode(new Uint8Array(l2));
}

function f2(a1, l8)
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
    if ((l8 != 7 & c6.width == f3(l8 - 1) & c6.height == f3(l8 - 1)) | (l8 == 7 & c6.width == 256 & c6.height == 256))
        {
        e10.style.visibility = 'collapse';

        v3.width = c6.width;
v3.height = c6.height;

v4.drawImage(c6, 0, 0);

v1[l8] = decode(v3.toDataURL("image/png").split(',')[1]);

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
}

function f3(l12)
{
if (l12 == 6)
{
    return 0;
}
else
{
    return 4 * 2 ** l12;
}
}

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
