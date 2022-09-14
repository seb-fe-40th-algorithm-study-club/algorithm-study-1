//주사위 3개

const input = '1 3 2'.toString().trim().split(' ').map(Number);
const [x,y,z] = input

if(x === y && x===z){ console.log(10000 + (x * 1000)) }
else if(x === y && x !== z){ console.log(1000 + (x * 100)) }
else if(x === z && x !== y){ console.log(1000 + (x * 100)) }
else if(y === z && y !== x){ console.log(1000 + (y * 100)) }
else if(x !== y && y !== z){ console.log(Math.max(x,y,z)* 100) }