class Parser {
    constructor(motif) {
        this._motif = motif;
        this._str = '';
    }

    get motif() {
        return this._motif;
    }

    get str() {

        return this._str;
    }

    parse(phrase) {
        this._str = phrase
            .split( this._motif )
            .map( word => word.trim() )
            .filter( word => parseInt(word) == word )
            .join(' ');
            
        // ALGO
        // const numbers = [] ;

        // this._str.map( word => {
        //     if( parseInt(word) == word ){
        //         numbers.push(word);
        //     }
        // });

        // this._str = numbers.join(' ');

       
    }
}

const parser = new Parser(':');
parser.parse('8790: bonjour le monde:8987:7777:Hello World:    9007');
console.log(parser.motif);
console.log(parser.str);
