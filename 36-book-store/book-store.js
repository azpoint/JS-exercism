export const cost = (books) => {
	const disc = [1, 0.95, 0.9, 0.8, 0.75];
	
	//Array of book count per set
	const bookSetQty = []

	//Extract max possible number of books per set
	while(books.length > 0) {
		const set = new Set(books)

		bookSetQty.push(set.size)

		set.forEach( book => books.splice(books.indexOf(book), 1))
	}

	//Even to 4 books when there are sets of 3 and 5 books
	while(bookSetQty.includes(3) && bookSetQty.includes(5)) {
		bookSetQty.splice(bookSetQty.indexOf(3), 1)
		bookSetQty.splice(bookSetQty.indexOf(5), 1)
		bookSetQty.push(4,4)
	}

	//Use reduce to accumulate the total price with discount
	return bookSetQty.reduce((total,current) => {
		return total + (current * 800 * disc[current - 1])
	},0)




};

