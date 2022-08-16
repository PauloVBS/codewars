function smallestCommons(arr) {
    let arrNumbers = []
        if(arr[1]>arr[0]){
            for(let i = arr[0];i<=arr[1];i++){
                arrNumbers.push(i)
            }
        }else{
            for(let i = arr[1];i<=arr[0];i++){
                arrNumbers.push(i)
            }

        }
    const
     arrPrimos = [2]
    function primo(numero){
            for(let i = 2; i< numero; i++)
                if(numero % i ===0){
                    return false
                }
                return numero > 1;
            
    }
    if(arr[0]>arr[1]){
        for(let i =3; i <= arr[0]; i++){
            if(primo(i)){
                arrPrimos.push(i)
            }
        }
    }else{
        for(let i =3; i <= arr[1]; i++){
            if(primo(i)){
                arrPrimos.push(i)
            }
        }
        }
    let arrFinal = []
    for(element of arrPrimos){
        while (arrNumbers.some(elem => elem % element ===0)){
            arrNumbers = arrNumbers.map((num)=>{ if(num % element ==0){return num/element}else{return num}})
            arrFinal.push(element)
        }
    }
    return arrFinal.reduce((num,atual)=>{return atual*num});
  }
  
  console.log(smallestCommons([2,10]));