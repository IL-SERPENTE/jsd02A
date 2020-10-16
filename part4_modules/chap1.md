# Import & export en JS Introduction

Nous allons vous montrez dans deux contextes différents comment faire des import/export en ES6.

Vous avez deux exemples dans le dossier Examples de ce chaptire :

- Examples/InNodeJS

- Examples/HTML

1. Examples/InNodeJS

Structure des dossiers et fichiers :

```text
InNodeJS/
    core/
        parse.js
    app.js
    config.js
    package.json
```

Dans le contexte "NodeJS", c'est-à-dire lorsqu'on exécute nos fichiers en ligne de commande comme vu dans le cours, et pour les versions de NodeJS 14 et 12, nous devons créer un fichier **package.json** dans lequel on précise à NodeJS que l'on utilise la syntaxe ES6 des import et export (sinon ça ne marchera pas ...).

- Fichier package.json, regardez dans le dossier

```json
{ "type": "module" }
```

Testez le code pour voir si tout marche correctement, dans le dossier InNodeJS

```bash
node app.js

// dans la console
API : ABC123
PASS : 123
Phrase parsing  891819 891819
```

## export par défaut

Vous ne pouvez faire qu'un export par défaut par fichier.

Dans le fichier core/parse.js nous exportons la fonction parse que nous utilisons dans le fichier app.js

## export multiples

Vous pouvez faire autant d'export de constante, fonction, classe que vous souhaitez :

```js
export const API = "ABC123";
export const PASS = "123";

export const sayHello = message => `Voici mon message ${messaqge}`;
```

Vous pouvez également exporter des constantes, classes, fonctions en utilisant la syntaxe suivante :

```js
const API = "ABC123";
const PASS = "123";

const sayHello = message => `Voici mon message ${messaqge}`;

export { API, PASS, sayHello };
```

## import 

Les exemples d'import sont fait dans le fichier app.js

Pour importer une constante, fonction ou classe qui a été export par défaut vous pouvez dans ce cas renommer cet import, ci-dessous on a renommé la fonction parse exportée par défaut depuis le fichier core/parse.js :

```js
import parseDigit from './core/parse.js';

// appel de la fonction exportée
parseDigit('ma phrase9909: hhh:  9897');
```

Si on importe des constantes, classes ou fonctions par défaut alors on utilisera la synstaxe suivante :

```js
import { API, PASS } from './config';
```

## Dans le cas d'une page web

Récupérez l'exemple dans le dossier HTML dans le dossier Examples.

Vous devez également installer un module pour vscode :

![livereload](images/liveServer.png)

Allez dans la partie installation de module et installez le module Live Server de Ritwick Dey.

Une fois installé placez dans la barre d'état en bas à droite de vscode vous devriez voir "Go Live" cliquez dessus et naviguez dans vos dossier pour afficher la page index.html

Dans cette page nous n'avons qu'à charger le fichier app.js en mentionnant à notre navigateur que le fichier importé utilise des modules 

```html
 <script type="module" src="./app.js"></script>
 ```
 Le code devrait fonctionner correctement. Pour le vérifier inspectez la page Web vous devriez voir :

```text
API : ABC123  app.js:12 
PASS : 123    app.js:15 
```

Remarque : ne cherchez pas à afficher la page index.html directement sans passer par le Live Server de vscode, le navigateur bloquera les imports (sécurité), nous reparlerons de ce point plus tard.

Pour arrêter le serveur de vscode cliquez en bas à droite sur l'onglet suivant le port devrait être 5500 :
**Port: 5500**

