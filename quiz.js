const readlineSync = require('readline-sync')
let note = 0

let choix = ['langage', 'compilateur',]
let index = readlineSync.keyInSelect(choix, 'Question 1: Le C++ est un:')
switch (index) {
  case 0:
    console.log('bonne reponse')
    note+=1
    break
  case 1:
    console.log('maivaise reponse')
    break
}

choix = ['Vrai', 'Faux',]
index = readlineSync.keyInSelect(choix, 'Question 2: TypeScript est une évolution de Javascript:')
switch (index) {
  case 0:
    console.log('bonne reponse')
    note+=1
    break
  case 1:
    console.log('maivaise reponse')
    break
}

choix = ['Vrai', 'Faux',]
index = readlineSync.keyInSelect(choix, 'Question 3: Lire les cours avant de faire les exercices est inutile:')
switch (index) {
  case 0:
    console.log('maivaise reponse')
    break
    case 1:
      console.log('bonne reponse')
      note+=1
    break
}

choix = ['Vrai', 'Faux',]
index = readlineSync.keyInSelect(choix, 'Question 4: react.js a été developpé par Google:')
switch (index) {
  case 0:
    console.log('maivaise reponse')
    break
  case 1:
    console.log('bonne reponse')
    note+=1
    break
}

choix = ['Vrai', 'Faux',]
index = readlineSync.keyInSelect(choix, 'Question 5: Ethereum est une blockchain publique:')
switch (index) {
  case 0:
    console.log('bonne reponse')
    note+=1
    break
  case 1:
    console.log('maivaise reponse')
    break
}


console.log(`votre note est de: ${note}/5`)
process.exit(1)
