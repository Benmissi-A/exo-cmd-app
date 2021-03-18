const readlinesync = require('readline-sync')


let yourName = readlinesync.question(`entrez votre nom :`)
let yourFirstName =  readlinesync.question(`entrez votre prenom :`)
let yourAge =  readlinesync.question(`entrez votre prenom :`)

if(Number(yourAge) < Number(process.argv[2]) ){
  console.log(`Désolé, ${yourFirstName} ${yourName}, vous êtes mineur, vous ne pouvez pas voter`)
}else{
  console.log(`${yourFirstName} ${yourName}, vous êtes majeur, vous pouvez voter`)
}
