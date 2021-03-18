const readlinesync = require('readline-sync')
const chalk = require('chalk');

let number =''
do{

 number = readlinesync.question(`entrez un nombre :`)
  if(isNaN(Number(number))=== false){

    if(Number(number) > Number(process.argv[2])){
      console.log(chalk.red(`le nombre est trop grand`))
    }else if(Number(number) < Number(process.argv[2])){
       console.log(chalk.red(`le nombre est trop petit`))
    }else{
       console.log(chalk.green(`bravo! vous avez deviné`))
    }
  }else{
    console.log(`err`)
  }
}while(Number(number) !== Number(process.argv[2]))