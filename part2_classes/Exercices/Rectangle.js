
class Rectangle {
    constructor(w, h) {
        this._w = w;
        this._h = h;

        this._name = "Rectangle";
    }

    // Méthode de la classe
    area(){

        return this._w * this._h;
    }

    set w(w) {
        // if (parseFloat(w) == w) {
        //     this._w = w;
        // } else {
        //     console.error("Bad value ...");
        // }

        if (parseFloat(w) == w) {
            this._w = w;

            return;
        }
        console.error('Bad value');
    }

    get w() {

        return this._w;
    }

    set h(h) {
        if (parseFloat(h) == h) {
            this._h = h;

            return;
        }
        console.error('Bad value');
    }

    get h() {

        return this._h;
    }

    set name(name) {
        this._name = name;
    }

    get name(){

        return this._name;
    }
}

rect = new Rectangle(1, 2);
rect.w = 10;
// rect.w = "Hello"; 
rect.h = 5;

console.log(`
Dimension de mon rectangle ${rect.w} largeur ${rect.h} hauteur.
On peut également calculer l'air : ${rect.area()}  m2 ou faire le calcul à la main : ${rect.w * rect.h}.
Nom de la figure : ${rect.name}
`);

class Square extends Rectangle {

    constructor(w){
        // IMPOSSIBLE on ne doit pas le faire un point c'est tout !
        // this._name = "Je suis un carré";
        super(w, w);
        this._name = "Square";
    }
}

const square = new Square(5);

console.log(`
Dimension de mon carré ${square.w} largeur ${square.h} hauteur.
On peut également calculer l'air : ${square.w * square.h} m2.
Avec la fonction : ${square.area()} m2.
Nom de la figure : ${square.name}
`);