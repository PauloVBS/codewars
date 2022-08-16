const primo = (numero) => {
    for(let i = 2; i< numero; i++)
        if(numero % i ===0){
            return false;
        }
        return numero > 1;
    
}

const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};

    console.log(primo(9))