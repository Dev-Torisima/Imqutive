//Script6.js
//Created by Torisima 2025

var e1 = document.getElementsByClassName("e1")[0];
var e2 = document.getElementsByClassName("e2")[0];
var e3 = document.getElementsByClassName("e3")[0];
var e4 = document.getElementsByClassName("e4")[0];
var e5 = document.getElementsByClassName("e5")[0];

var v1 = 0;
var v2 = 0;
var v3 = document.createElement('canvas');
var v4 = v3.getContext("2d");


e1.addEventListener('change', function (a1) 
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
if (c6.width <= 256 & c6.height <= 256)
{
    e5.style.visibility = 'collapse';

    v3.width = c6.width;
    v3.height = c6.height;
    
    v4.drawImage(c6, 0, 0);

    v2 = 2;
}
else
{
e5.style.visibility = 'visible';

    v2 = 0;
}
};

c6.src = a2.target.result;
};

c5.onerror = function (a)
{
e1.files = [];
v2 = 0;
};

c5.readAsDataURL(c3);
}
});

e3.addEventListener('click', ()=>
{
if (v2 == 2)
{
v2 = 3;

e4.href = f1();

v2 = 2;
}
});



function f1()
{
let l1 = decode(v3.toDataURL("image/png").split(',')[1]);
let l2 = new ArrayBuffer(22 + l1.length);
let l3 = new DataView(l2);

l3.setUint8(0, 0x00);
l3.setUint8(1, 0x00);
l3.setUint8(2, 0x01);
l3.setUint8(3, 0x00);
l3.setUint8(4, 0x01);
l3.setUint8(5, 0x00);
l3.setUint8(6, f2(v3.width));
l3.setUint8(7, f2(v3.height));
l3.setUint8(8, 0x00);
l3.setUint8(9, 0x00);
l3.setUint8(10, 0x01);
l3.setUint8(11, 0x00);
l3.setUint8(12, 0x20);
l3.setUint8(13, 0x00);
l3.setUint32(14, l1.length, true);
l3.setUint8(18, 0x16);
l3.setUint8(19, 0x00);
l3.setUint8(20, 0x00);
l3.setUint8(21, 0x00);

new Uint8Array(l2).set(l1, 22);

return "data:image/vnd.microsoft.icon;base64," + encode(new Uint8Array(l2));
}

function f2(l7)
{
if (l7 == 256)
{
return 0;
}
else
{
    return l7;
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