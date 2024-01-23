//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
	constructor(values = []) {
		this.values = values
	}

	append(list) {
		this.values = [...this.values, ...list.values]

		return this
	}

	concat(list) {
		const newList = new List(this.values)
		list.values.forEach(listI => newList.append(listI))
		return newList
	}	

	filter(func) {
		const filtered = []

		for(const val of this.values) {
			if(func(val)) filtered.append(val)
		}

		return new List(filtered)
	}

	map(func) {
		const mapped = []

		for(const val of this.values) {
			mapped.append(func(val))
		}
		return new List(mapped)
	}

	length() {
		return this.values.length
	}

	foldl(func, val) {
		let acc = val

		for(let i of this.values) {
			acc = func(acc, i)
		}
		return acc
	}

	foldr(func,val) {
		let acc = val

		for(let i = this.values.length - 1; i >= 0; i--) {
			acc = func(acc, this.values[i])
		}
		return acc
	}

	reverse() {
		let reversed = []

		for( let i = this.values.length - 1; i >= 0; i--) {
			reversed.push(this.values[i])
		}

		return new List(reversed)
	}
}
