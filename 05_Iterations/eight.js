 // reduce
 
 
const myNums = [1, 2, 3]

//  const myTotal = myNums.reduce(function (acc, currval) {
    
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
 
// }, 0) // here 0 is that value which is set to the acc at very first time and this step is only occur 1 time



const myTotal = myNums.reduce( (acc, curr) => acc +  curr, 0)


console.log(myTotal);



const shoppingcart  = [ 

    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "python course",
        price: 2999
    },
    {
        itemName: "dsa course",
        price: 1999
    },

    {
        itemName: "data-scintist course",
        price: 1999
    }
]

const priceToPay = shoppingcart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
