function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    const arrMoney =[100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]
    let primeiroValor = arrMoney.findIndex(element=> element<=change)
    let cidReverso = cid.reverse()
    let subtrai = 0
    let retornoFinal = {status:'', change:[]}
    for(i = primeiroValor; i < arrMoney.length; i++){
        subtrai = change - parseInt(change/arrMoney[i])*arrMoney[i]
        retornoFinal.change.push(cidReverso[i][0],parseInt(change/arrMoney[i])*arrMoney[i])
        if(change == 0){return retornoFinal}
    }
        /*if(change % arrMoney[i] == 0 && cidReverso[i][1]> change){
            retornoFinal.change.push(`${cidReverso[i][0]}`, change)
            return retornoFinal
        }else if(change % arrMoney[i] == 0 && cidReverso[i][1] == change){
            console.log('pegou o else if')
            retornoFinal.change.push([`${cidReverso[i][1]}`, change])
            return retornoFinal
        }*/
        return retornoFinal
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));