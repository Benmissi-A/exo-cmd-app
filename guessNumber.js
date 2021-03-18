const readlinesync = require('readline-sync')
const chalk = require('chalk');

let number = readlinesync.question(`pour jouer avec moi entres le nombre au quel je pense !`)
if(isNaN(Number(number))=== false){
  if(Number(number) > Number(process.argv[2])){
    console.log(`le nombre est trop grand`)
  }
}