//Script5.js
//Created by Torisima 2025
//Script1.js => Script3.js or Script4.js => Script5.js

function f1(l4, l5)
{
let l1 = 0;
let l2 = new ArrayBuffer(6 + l4.length * 16 + l5);
let l3 = new DataView(l2);

l3.setUint8(0, 0x00);
l3.setUint8(1, 0x00);
l3.setUint16(2, v5, true);
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
l3.setUint16(l1 + 4, v6, true);
l3.setUint16(l1 + 6, v7, true);
l3.setUint32(l1 + 8, v1[l4[i]].length, true);
l3.setUint32(l1 + 12, l6, true);

new Uint8Array(l2).set(v1[l4[i]], l6);

l1 += 16;
l6 += v1[l4[i]].length;
}
}

return "data:image/vnd.microsoft.icon;base64," + encode(new Uint8Array(l2));
}


e8.addEventListener('click', ()=>
    {
    if (v2 == 1)
    {
    v2 = 9;
    

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

if (v5 == 2 & l4.length != 0 & (!(v6 >= 0 & v7 >= 0 & v6 < 4 * 2 ** l4[0] & v7 < 4 * 2 ** l4[0])))
{
    e10.style.visibility = 'visible';
}
else
{
    e10.style.visibility = 'collapse';

    e9.href = f1(l4, l5);
}
    
    v2 = 1;
    }
    });