/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryTransactions = [];
  for(let t of transactions) {
    let category = t.category;
    let price = t.price;
    let isFound = false;
    for(let c of categoryTransactions) {
      if(c["category"] === category) {
        isFound = true;
        c["totalSpent"] += price;
      }
    }
    if(!isFound) {
      categoryTransactions.push({category, totalSpent: price});
    }
  }
  return categoryTransactions;
}

function calculateTotalSpentByCategory1(transactions) {
  let categories = {};

  transactions.forEach(t => {
    if(categories.hasOwnProperty(t.category)) {
      categories[t.category] += t.price;
    } else {
      categories[t.category] = t.price;
    }
  })
  
  let tr = Object.keys(categories).map(c => {
    return { category: c, totalSpent: categories[c] }
  })

  return tr;

}

module.exports = calculateTotalSpentByCategory1;
