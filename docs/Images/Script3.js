//Script3.js
//Copyright (c) 2025 Torisima

var p1 = document.getElementsByClassName("p1")[0];

var e1 = document.getElementsByClassName("e1")[0];
var e2 = document.getElementsByClassName("e2")[0];

var e4 = document.getElementsByClassName("e4")[0];
var e5 = document.getElementsByClassName("e5")[0];

var e7 = document.getElementsByClassName("e7")[0];
var e8 = document.getElementsByClassName("e8")[0];
var e9 = document.getElementsByClassName("e9")[0];
var e10 = document.getElementsByClassName("e10")[0];

var v1 = [];
var v2 = 0;
var v3 = document.createElement('canvas');
var v4 = v3.getContext("2d");
var v5 = [0];
var v6 = [0];



e1.addEventListener('change', (a1)=>
{
const c3 = a1.target.files[0];
if (c3)
{
v2 = 4;

const c5 = new FileReader(c3);

c5.onload = function (a2)
{
    v2 = 5;

    let l61 = decode(a2.target.result.split(',')[1]);
    if (l61.length >= 22)
    {
        if (l61[2] != 2)
            {
                l61[2] = 2;

l61[10] = 0;
l61[11] = 0;
l61[12] = 0;
l61[13] = 0;
            }

                let l10 = document.createElement('img');
l10.src = a2.target.result;
l10.style.width = '25vw';
l10.style.width = '25vw';
l10.style.marginLeft = '10px';
l10.style.marginRight = '10px';
e2.appendChild(l10);

v1.push(l61);

v2 = 1;
    }
    else
    {
        v2 = 0;
    }
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
        v2 = 0;
    });


e4.addEventListener('change', ()=>
    {
        v5 = [];
        let l51 = e4.value.split(',');
        for (let i = 0; i < l51.length; i++) 
            {
            if (!isNaN(+l51[i]) & +l51[i] >= 0)
            {
v5.push(+l51[i]);
            }
        }
    });

    e5.addEventListener('change', ()=>
        {
            v6 = [];
            let l51 = e5.value.split(',');
            for (let i = 0; i < l51.length; i++) 
                {
                if (!isNaN(+l51[i]) & +l51[i] >= 0)
                {
    v6.push(+l51[i]);
                }
            }
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


e8.addEventListener('click', ()=>
    {
    if (v2 == 1)
    {
    v2 = 9;
    
let l5 = 0;

for (let i = 0; i < v1.length; i++)
{
    l5 += v1[i].length;
}


if (v5.length == v6.length)
{
for (let i = 0; i < v6.length; i++)
{
    if (v6[i] >= v1.length)
    {
        v2 = 1;
        console.log("The numbers of Rate or Sequnce are out of number of Images.");        
        return;
    }
}

    e9.href = f1();
}
else
{
    console.log("The numbers of Rate or Sequnce are not equal.");
}
    
    v2 = 1;
    }
    });

    function f1()
    {
let l4 = 0;
for (let i = 0; i < v1.length; i++) 
    {
    l4 += v1[i].length;
}

l4 = (v1.length * 2 + 21 + v5.length * 2) * 4 + l4;


let l1 = 0;
let l2 = new ArrayBuffer(l4);
let l3 = new DataView(l2);

let l9 = new Uint8Array(l2);

l3.setUint8(0, 0x52);
l3.setUint8(1, 0x49);
l3.setUint8(2, 0x46);
l3.setUint8(3, 0x46);

l3.setUint32(4, l4 - 8, true);

l3.setUint8(8, 0x41);
l3.setUint8(9, 0x43);
l3.setUint8(10, 0x4F);
l3.setUint8(11, 0x4E);

l3.setUint8(12, 0x61);
l3.setUint8(13, 0x6E);
l3.setUint8(14, 0x69);
l3.setUint8(15, 0x68);

l3.setUint8(16, 0x24);
l3.setUint8(17, 0x00);
l3.setUint8(18, 0x00);
l3.setUint8(19, 0x00);

l3.setUint8(20, 0x24);
l3.setUint8(21, 0x00);
l3.setUint8(22, 0x00);
l3.setUint8(23, 0x00);

l3.setUint32(24, v1.length, true);
l3.setUint32(28, v5.length, true);

l3.setUint8(32, 0x00);
l3.setUint8(33, 0x00);
l3.setUint8(34, 0x00);
l3.setUint8(35, 0x00);
l3.setUint8(36, 0x00);
l3.setUint8(37, 0x00);
l3.setUint8(38, 0x00);
l3.setUint8(39, 0x00);
l3.setUint8(40, 0x04);
l3.setUint8(41, 0x00);
l3.setUint8(42, 0x00);
l3.setUint8(43, 0x00);
l3.setUint8(44, 0x01);
l3.setUint8(45, 0x00);
l3.setUint8(46, 0x00);
l3.setUint8(47, 0x00);
l3.setUint8(48, 0x0A);
l3.setUint8(49, 0x00);
l3.setUint8(50, 0x00);
l3.setUint8(51, 0x00);
l3.setUint8(52, 0x01);
l3.setUint8(53, 0x00);
l3.setUint8(54, 0x00);
l3.setUint8(55, 0x00);

l1 += 56;

l3.setUint8(56, 0x72);
l3.setUint8(57, 0x61);
l3.setUint8(58, 0x74);
l3.setUint8(59, 0x65);
l3.setUint32(60, 4 * v5.length, true);

l1 += 8;

for (let i = 0; i < v5.length; i++) 
    {
        l3.setUint32(l1, v5[i], true);
        l1 += 4;
}


l3.setUint8(l1, 0x73);
l3.setUint8(l1 + 1, 0x65);
l3.setUint8(l1 + 2, 0x71);
l3.setUint8(l1 + 3, 0x20);
l1 += 4;
l3.setUint32(l1, 4 * v5.length, true);
l1 += 4;
for (let i = 0; i < v5.length; i++) 
    {
        l3.setUint32(l1, v6[i], true);
        l1 += 4;
}


l3.setUint8(l1, 0x4C);
l3.setUint8(l1 + 1, 0x49);
l3.setUint8(l1 + 2, 0x53);
l3.setUint8(l1 + 3, 0x54);
l1 += 4;
let l5 = 0;
for (let i = 0; i < v1.length; i++)
    {
    l5 += v1[i].length;
    }
l3.setUint32(l1, 4 * (1 + v1.length * 2) + l5, true);
l1 += 4;
l3.setUint8(l1, 0x66);
l3.setUint8(l1 + 1, 0x72);
l3.setUint8(l1 + 2, 0x61);
l3.setUint8(l1 + 3, 0x6D);
l1 += 4;
for (let i = 0; i < v1.length; i++)
{
    l3.setUint8(l1, 0x69);
l3.setUint8(l1 + 1, 0x63);
l3.setUint8(l1 + 2, 0x6F);
l3.setUint8(l1 + 3, 0x6E);
l1 += 4;

l3.setUint32(l1, v1[i].length, true);
l1 += 4;

for (let j = 0; j < v1[i].length; j++)
{
l9[l1 + j] = v1[i][j];
}

l1 += v1[i].length;
}

return "data:application/x-navi-animation;base64," + encode(new Uint8Array(l2));
}
