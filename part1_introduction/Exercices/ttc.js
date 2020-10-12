

function ttc(price, tva = .2) {

    if ( isNaN(parseInt(price)) ) return "Error number price value";

    return price * (1 + tva); // HT * 1.2
}

console.log(ttc(100));
console.log(ttc(100, .3));

// vérifier le type 
console.log( isNaN(parseInt(100)) === true  );
console.log( isNaN(parseInt("Hello")) === true  );

console.log(ttc("hello", .3));
// JS est capable de transtyper une variable 
console.log(ttc("100", .3));
