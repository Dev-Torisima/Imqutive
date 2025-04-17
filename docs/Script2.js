var e1 = document.getElementsByClassName("e1")[0];
var e2 = document.getElementsByClassName("e2")[0];
var e3 = document.getElementsByClassName("e3")[0];
var e4 = document.getElementsByClassName("e4")[0];
var e5 = document.getElementsByClassName("e5")[0];

var v1 = "image/png";
var v2 = 0;
var v3 = document.createElement('canvas');
var v4 = v3.getContext("2d");


e2.addEventListener('change', ()=>
{
    v1 = e2.value;
});

e1.addEventListener('change', function (a1) 
{
const c3 = a1.target.files[0];
if (c3)
{
v2 = 1;

const r = new FileReader(c3);

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
};

r.onerror = function ()
{
e1.files = [];
v2 = 0;
};

r.readAsDataURL(c3);
}
});

e3.addEventListener('click', ()=>
{
if (v2 == 2)
{
v2 = 3;

const c4 = v3.toDataURL(v1);

if (c4.split(';')[0] == "data:" + v1)
{
    e5.style.visibility = 'collapse';
    e4.href = c4;
    e4.download = "Image." + v1.substring(6);
}
else
{
    e5.style.visibility = 'visible';
}

v2 = 2;
}
});