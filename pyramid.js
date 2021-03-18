const showStars = (nbStars,symbol, reverse ) => {
  for (let i = 0; i < Number(nbStars); i += 1) {
    switch(reverse){
      case undefined :
        console.log(symbol.repeat(i+1))
        break
      case '-r':
        console.log(symbol.repeat(Number(nbStars)-i))
        break
      default :
      console.log('error '.repeat(Number(nbStars)-i))
      console.log('error '.repeat(i+1))
      break
    }
  }
}
showStars(process.argv[2],process.argv[3],process.argv[4])