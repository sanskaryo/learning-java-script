let items = [250,654,567,300,50]

let idx = 0;

for (let val of items)  {
    console.log(`value at index {i} = ${val}`);
    i++;
}

console.log()

for(let i= 0 ; i<items.length; i++)  {
    console.log(`value at index ${idx} = ${items[idx]}`);
}