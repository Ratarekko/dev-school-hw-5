function unpackSausages(truck) {
    const sausages = [];
    let countUndamagedPackages = 0;
    const outputArray2 = [];

    for (const box of truck) {
        if (box.length === 0) continue;

        for (const packages of box) {
            if (/^\[.*]$/.test(packages) && packages.length === 6) {
                const sausage = packages.slice(1, -1);
                if (sausage.split("").every(char => char === sausage[0])) {
                    if (++countUndamagedPackages % 5 !== 0) {
                        sausages.push(...sausage.split(""));
                    } else {
                        outputArray2.push(...sausage.split(""));
                    }
                }
            }
        }
    }

    return sausages.join(" ");
}

const truck = [
    ["(-)", "[1111]", "[2222]"],
    ["IuI", "[3333]"],
    ["[4444]", "UwU", "[IlII]"],
    ["IuI", "[5555]", "x"],
    ["IuI", "[6666]", "x"],
    ["IuI", "[7777]", "[8888]"],
    ["[9999]", "[ХХХХ]", "x"],
    []
];
console.log(unpackSausages(truck));

//  let outputArray2 = [];
//   for (let i = 0; i < sausages.length; i++) {
//     if((i+1) % 5 !==0 ){
//       outputArray2.push(sausages[i])
//     }
//   }
