//Script2.js
//Created by Torisima 2025
//Script1.js => Script2.js

function f1(l5)
{
let l1 = 0;
let l2 = new ArrayBuffer(6 + v1.length * 16 + l5);
let l3 = new DataView(l2);

l3.setUint8(0, 0x00);
l3.setUint8(1, 0x00);
l3.setUint16(2, v5, true);
l3.setUint16(4, v1.length, true);

l1 += 6;

if (v1.length != 0)
{
    let l6 = 16 * v1.length + 6;
for (let i = 0; i < v1.length; i++) 
    {
    l3.setUint8(l1 + 0, v14[i]);
l3.setUint8(l1 + 1, v15[i]);
l3.setUint8(l1 + 2, 0x00);
l3.setUint8(l1 + 3, 0x00);
l3.setUint16(l1 + 4, v6, true);
l3.setUint16(l1 + 6, v7, true);
l3.setUint32(l1 + 8, v1[i].length, true);
l3.setUint32(l1 + 12, l6, true);

new Uint8Array(l2).set(v1[i], l6);

l1 += 16;
l6 += v1[i].length;
}
}

return "data:image/vnd.microsoft.icon;base64," + encode(new Uint8Array(l2));
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


if (v5 == 2)
{
    let l92 = 0;
    let l93 = 0;
    for (let i = 0; i < v1.length; i++)
        {
            if (v14[i] != 0 & l92 < v14[i])
            {
                l92 = v14[i];
            }
            else if (v14[i] == 0)
            {
                l92 = 256;
            }

            if (v15[i] != 0 & l93 < v15[i])
                {
                    l93 = v15[i];
                }
                else if (v15[i] == 0)
                {
                    l93 = 256;
                }
        }

        if (v6 < l92 & v7 < l93)
        {
            e10.style.visibility = 'collapse';

            e9.href = f1(l5);
        }
        else
        {
            e10.style.visibility = 'visible';
        }
}
else
{
    e9.href = f1(l5);
}

    
    v2 = 1;
    }
    });