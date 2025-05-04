//Script2.js
//Copyright (c) Torisima 2025

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
    
    v1.push(f10());
    
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
