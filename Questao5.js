//Test Taget Sistema
//Lucas Spartacus 11/01/2025

function inverterString(str) {
    let stringInvertida = ''; 

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];  
    }

    return stringInvertida;
}

let minhaString = "Test Target sistemas Lucas Spartacus";
let stringInvertida = inverterString(minhaString);

console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);