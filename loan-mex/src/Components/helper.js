export function calculateTotal(amount, term) {
    // Amount
    // 0 - 1000 = 25%
    // 1001 - 5000 = 20%
    // 5001 - 10000 = 15%
    // +10000 = 10%
    let totalAmount = amount <= 1000 ? amount * .25 :
                      amount <= 5000 ? amount * .20 :
                      amount <= 10000 ? amount * .15 :
                      amount * .1;
    console.log(totalAmount)

    
    // Calculate the Total Interest based on Time
    // 3 - 5%
    // 6 - 10%
    // 12 - 15%
    // 24 - 20%
    let totalTerm = term === 3 ? amount * .05 :
                    term === 6 ? amount * .1 :
                    term === 12 ? amount * .15 :
                    term === 24 ? amount * .2 : .5
    
    return amount + totalTerm + totalAmount;
}