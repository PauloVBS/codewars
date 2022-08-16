// String Types mini-challenge
// Write a function that will display the most recent reviewers name next to the review total,
// making sure to assign a type to the parameter, to prevent unwanted behaviour.
// : string

//const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// Solution
/*function showReviewTotal (value : number) {
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString()
}

showReviewTotal(reviews.length)*/7
function retorneMaisRecente(arr1: Array,arr2: Array){
   
    for(let i =0; i < 3; i ++)
        if(arr1[i]>arr2[i]){
            return arr1
        }else if(arr1[i]<arr2[i]){
            return arr2
        }
    
}
function returnLastDate(arr){
  let lastDate = [] 
  for(let i = 0;i<arr.length; i++){
      let data = arr[i].date.split('-').reverse()
      if(lastDate == ''|| )
  } 
}
console.log(returnLastDate(reviews))