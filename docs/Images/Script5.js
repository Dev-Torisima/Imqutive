//Script5.js
//Copyright (c) 2025 Torisima

const ToIconBitmap_Const1 = new Uint8Array([0x28, 0x00, 0x00, 0x00]);
const ToIconBitmap_Const2 = new Uint8Array([0x01, 0x00, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00]);
const ToIconBitmap_Const3 = new Uint8Array([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);

function ToBytes_i32(num)
{
let l31 = new DataView(new ArrayBuffer(4));
l31.setInt32(0, num, true);
return new Uint8Array(l31.buffer);
}

function ToBytes_u32(num)
{
let l31 = new DataView(new ArrayBuffer(4));
l31.setUint32(0, num, true);
return new Uint8Array(l31.buffer);
}

function ToIconBitmap(l3)
{
    let l5 = new Uint8Array(l3.data.buffer);
    let l2 = new Uint8Array(l5.length);
    for (let i = 0; i < l3.height; i++) 
        {
        for (let j = 0; j < l3.width; j++) 
            {
                let h1 = (j + i * l3.width) * 4;
                let h2 = (j + (l3.height - i - 1) * l3.width) * 4;
            l2[h2] = l5[h1 + 2];
            l2[h2 + 1] = l5[h1 + 1];
            l2[h2 + 2] = l5[h1];
            l2[h2 + 3] = l5[h1 + 3];
        }
    }

    let l8 = new Uint8Array(Math.ceil(l3.width / 8) * l3.height);
    for (let i = 0; i < l3.height; i++) 
        {
        for (let j = 0; j < l3.width; j++) 
            {
                let h1 = (j + i * l3.width) * 4 + 3;
                let h2 = j / 8 + i * Math.ceil(l3.width / 8);
                if (l2[h1] <= 0x20)
                {
                    l8[h2] += 0b01 << (7 - j % 8);
                }
        }
    }

let l1 = new Uint8Array(0x7c + l2.length + l8.length);
let rl = 0;

//Info Header
l1.set(ToIconBitmap_Const1, rl);
l1.set(ToBytes_u32(l3.width), rl + 4);
l1.set(ToBytes_i32(l3.height * 2), rl + 8);
l1.set(ToIconBitmap_Const2, rl + 12);
l1.set(ToBytes_u32(l2.length + l8.length), rl + 20);
l1.set(ToIconBitmap_Const3, rl + 24);
rl += 40;

//ImageData(XOR Data)
l1.set(l2, rl);
rl += l2.length;

//AlphaData(And Mask)
l1.set(l8, rl);

    return l1;
}

function f10()
{
return ToIconBitmap(v4.getImageData(0, 0, v3.width, v3.height));
}
