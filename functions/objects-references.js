let myAccount = { 
  name: ' Edward Cheatham',
  expenses: 0,
  income: 0,
}

let addExpense = function (account,amount) { 
  account.expenses = account.expenses + amount 
  console.log(account)
}

addExpense(myAccount, 2.50) 
console.log(myAccount)


// addIncome 
let addIncome = function (account, income){
  account.income = account.income + income
}

// resetAccount 
let resetAccount = function (account) {
  account.name = account.name ,
  account.expenses = 0,
  account.income = 0
}

let getAccountSummary = function(account){
  let balance = account.income - account.expenses
  return `The account for ${account.name}, has $${balance} balance. after $${account.expenses} in expenses has been withdrawn.`
}
// getAccountSummary 

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)

console.log(getAccountSummary(myAccount))


