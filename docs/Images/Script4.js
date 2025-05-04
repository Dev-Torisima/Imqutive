//Script4.js
//Copyright (c) 2025 Torisima
var e1 = document.getElementsByClassName("e1")[0];
var e2 = document.getElementsByClassName("e2")[0];
var e3 = document.getElementsByClassName("e3")[0];
var e9 = document.getElementsByClassName("e9")[0];

var v2 = 0;
var v3 = document.createElement('canvas');
var v4 = v3.getContext("2d");

e1.addEventListener('change', function (a1) 
{
const ToBitmap_Const3 = a1.target.files[0];
if (ToBitmap_Const3)
{
v2 = 1;

const r = new FileReader(ToBitmap_Const3);

r.onload = function (a2)
{
const img = new Image();

img.onload = ()=>
{
v3.width = img.width;
v3.height = img.height;

v4.drawImage(img, 0, 0);

v2 = 2;
};

img.src = a2.target.result;
e9.src = a2.target.result;
};

r.onerror = function ()
{
e1.files = [];
v2 = 0;
};

r.readAsDataURL(ToBitmap_Const3);
}
});

e2.addEventListener('click', ()=>
{
if (v2 == 2)
{
v2 = 3;

e3.href = "data:image/bmp;base64," + encode(ToBitmap(v4.getImageData(0, 0, v3.width, v3.height)));

v2 = 2;
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
